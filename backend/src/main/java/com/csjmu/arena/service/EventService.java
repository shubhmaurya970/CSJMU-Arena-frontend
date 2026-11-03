package com.csjmu.arena.service;

import com.csjmu.arena.dto.CreateEventRequest;
import com.csjmu.arena.dto.EventResponse;
import com.csjmu.arena.entity.Event;
import com.csjmu.arena.entity.EventStatus;
import com.csjmu.arena.entity.User;
import com.csjmu.arena.mapper.EventMapper;
import com.csjmu.arena.repository.EventRepository;
import com.csjmu.arena.security.SecurityUtil;
import org.springframework.stereotype.Service;
import com.csjmu.arena.dto.OrganizerDashboardResponse;
import com.csjmu.arena.entity.EventCategory;
import java.util.List;
import java.time.LocalDate;
import com.csjmu.arena.exception.ResourceNotFoundException;
import com.csjmu.arena.exception.UnauthorizedActionException;
import com.csjmu.arena.entity.EventUpdateRequest;
import com.csjmu.arena.entity.UpdateRequestStatus;
import com.csjmu.arena.repository.EventUpdateRequestRepository;
import java.time.LocalDateTime;
import com.csjmu.arena.dto.UpdateEventRequest;
import com.csjmu.arena.dto.AdminEventDecisionRequest;
import com.csjmu.arena.dto.EventUpdateRequestResponse;
import com.csjmu.arena.mapper.EventUpdateRequestMapper;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EventService {

    private final EventUpdateRequestRepository eventUpdateRequestRepository;
    private final EventRepository eventRepository;
    private final SecurityUtil securityUtil;

    public EventService(
            EventRepository eventRepository,
            SecurityUtil securityUtil,
            EventUpdateRequestRepository eventUpdateRequestRepository) {

        this.eventRepository = eventRepository;
        this.securityUtil = securityUtil;
        this.eventUpdateRequestRepository = eventUpdateRequestRepository;
    }
    public List<EventUpdateRequestResponse> getPendingUpdateRequests() {

        List<EventUpdateRequest> requests =
                eventUpdateRequestRepository.findByStatus(
                        UpdateRequestStatus.PENDING
                );

        return requests.stream()
                .map(EventUpdateRequestMapper::toResponse)
                .toList();
    }

    public EventResponse editEvent(
            Long id,
            UpdateEventRequest request) {

        User organizer = securityUtil.getCurrentUser();


        Event event = eventRepository
                .findByIdAndOrganizer(id, organizer)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Event not found or you are not the organizer."
                        ));

        // =================================================
        // PENDING / REJECTED
        // Direct partial update
        // =================================================
        if (event.getStatus() == EventStatus.TAKEN_DOWN) {
            throw new UnauthorizedActionException(
                    "This event has been taken down and can no longer be modified."
            );
        }

        if (event.getStatus() == EventStatus.PENDING ||
                event.getStatus() == EventStatus.REJECTED) {

            if (request.getTitle() != null) {
                event.setTitle(request.getTitle());
            }

            if (request.getDescription() != null) {
                event.setDescription(request.getDescription());
            }

            if (request.getVenue() != null) {
                event.setVenue(request.getVenue());
            }

            if (request.getEventDate() != null) {
                event.setEventDate(request.getEventDate());
            }

            if (request.getRegistrationDeadline() != null) {
                event.setRegistrationDeadline(
                        request.getRegistrationDeadline()
                );
            }

            if (request.getCategory() != null) {
                event.setCategory(request.getCategory());
            }

            if (request.getMaxParticipants() != null) {
                event.setMaxParticipants(
                        request.getMaxParticipants()
                );
            }

            if (request.getRegistrationFee() != null) {
                event.setRegistrationFee(
                        request.getRegistrationFee()
                );
            }

            if (request.getImageUrl() != null &&
                    !request.getImageUrl().isBlank()) {

                event.setImageUrl(request.getImageUrl());
            }
            if (event.getStatus() == EventStatus.REJECTED) {

                event.setStatus(EventStatus.PENDING);

                event.setAdminMessage(null);
                event.setAdminReason(null);
                event.setReviewedAt(null);
            }

            event.setUpdatedAt(LocalDateTime.now());

            Event updatedEvent =
                    eventRepository.save(event);

            return EventMapper.toResponse(updatedEvent);
        }

        // =================================================
        // APPROVED
        // Create update request
        // =================================================

        if (event.getStatus() == EventStatus.APPROVED) {

            boolean requestAlreadyExists =
                    eventUpdateRequestRepository
                            .existsByEventAndStatus(
                                    event,
                                    UpdateRequestStatus.PENDING
                            );

            if (requestAlreadyExists) {

                throw new UnauthorizedActionException(
                        "An update request for this event is already pending."
                );
            }

            EventUpdateRequest updateRequest =
                    EventUpdateRequest.builder()
                            .event(event)
                            .organizer(organizer)

                            .title(
                                    request.getTitle() != null
                                            ? request.getTitle()
                                            : event.getTitle()
                            )

                            .description(
                                    request.getDescription() != null
                                            ? request.getDescription()
                                            : event.getDescription()
                            )

                            .venue(
                                    request.getVenue() != null
                                            ? request.getVenue()
                                            : event.getVenue()
                            )

                            .eventDate(
                                    request.getEventDate() != null
                                            ? request.getEventDate()
                                            : event.getEventDate()
                            )

                            .registrationDeadline(
                                    request.getRegistrationDeadline() != null
                                            ? request.getRegistrationDeadline()
                                            : event.getRegistrationDeadline()
                            )

                            .category(
                                    request.getCategory() != null
                                            ? request.getCategory()
                                            : event.getCategory()
                            )

                            .maxParticipants(
                                    request.getMaxParticipants() != null
                                            ? request.getMaxParticipants()
                                            : event.getMaxParticipants()
                            )

                            .registrationFee(
                                    request.getRegistrationFee() != null
                                            ? request.getRegistrationFee()
                                            : event.getRegistrationFee()
                            )

                            .imageUrl(
                                    request.getImageUrl() != null &&
                                            !request.getImageUrl().isBlank()
                                            ? request.getImageUrl()
                                            : event.getImageUrl()
                            )

                            .status(UpdateRequestStatus.PENDING)
                            .requestedAt(LocalDateTime.now())
                            .build();

            eventUpdateRequestRepository.save(updateRequest);

            return EventMapper.toResponse(event);
        }

        throw new UnauthorizedActionException(
                "This event cannot be edited."
        );
    }
    @Transactional
    public EventUpdateRequestResponse rejectUpdateRequest(
            Long requestId,
            AdminEventDecisionRequest request) {

        EventUpdateRequest updateRequest =
                eventUpdateRequestRepository.findById(requestId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Update request not found."
                                ));

        if (updateRequest.getStatus()
                != UpdateRequestStatus.PENDING) {

            throw new UnauthorizedActionException(
                    "This update request has already been reviewed."
            );
        }

        updateRequest.setStatus(UpdateRequestStatus.REJECTED);

        updateRequest.setAdminReason(
                request.getMessage()
        );

        updateRequest.setReviewedAt(
                LocalDateTime.now()
        );

        EventUpdateRequest savedRequest =
                eventUpdateRequestRepository.save(updateRequest);

        return EventUpdateRequestMapper.toResponse(
                savedRequest
        );
    }
    public EventResponse createEvent(CreateEventRequest request) {

        User organizer = securityUtil.getCurrentUser();

        Event event = Event.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .venue(request.getVenue())
                .eventDate(request.getEventDate())
                .registrationDeadline(request.getRegistrationDeadline())
                .category(request.getCategory())
                .maxParticipants(request.getMaxParticipants())
                .registrationFee(request.getRegistrationFee())
                .imageUrl(request.getImageUrl())
                .organizer(organizer)
                .status(EventStatus.PENDING)
                .build();

        Event savedEvent = eventRepository.save(event);

        return EventMapper.toResponse(savedEvent);
    }

    public List<EventResponse> getAllApprovedEvents() {

        List<Event> events =
                eventRepository.findByStatus(EventStatus.APPROVED);

        return events.stream()
                .map(EventMapper::toResponse)
                .toList();
    }

    public List<EventResponse> getAllPendingEvents() {

        List<Event> events =
                eventRepository.findByStatus(EventStatus.PENDING);

        return events.stream()
                .map(EventMapper::toResponse)
                .toList();
    }
    public List<EventResponse> getAllRejectedEvents() {

        List<Event> events =
                eventRepository.findByStatus(EventStatus.REJECTED);

        return events.stream()
                .map(EventMapper::toResponse)
                .toList();
    }

    public List<EventResponse> getAllTakenDownEvents() {

        List<Event> events =
                eventRepository.findByStatus(EventStatus.TAKEN_DOWN);

        return events.stream()
                .map(EventMapper::toResponse)
                .toList();
    }

    public EventResponse getEventById(Long id) {

        Event event = eventRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Event not found."));

        User currentUser = securityUtil.getCurrentUserOrNull();

        // Approved events are visible to everyone
        if (event.getStatus() == EventStatus.APPROVED) {
            return EventMapper.toResponse(event);
        }

        // Admin can view every event
        if (currentUser != null &&
                currentUser.getRole().name().equals("ADMIN")) {

            return EventMapper.toResponse(event);
        }

        // Organizer can view their own pending/rejected event
        if (currentUser != null &&
                currentUser.getRole().name().equals("ORGANIZER") &&
                event.getOrganizer() != null &&
                event.getOrganizer().getId()
                        .equals(currentUser.getId())) {

            return EventMapper.toResponse(event);
        }

        throw new UnauthorizedActionException(
                "You are not allowed to view this event."
        );
    }

    public EventResponse approveEvent(
            Long id,
            AdminEventDecisionRequest request) {

        Event event = eventRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Event not found."
                        ));

        if (event.getStatus() != EventStatus.PENDING) {
            throw new UnauthorizedActionException(
                    "Only pending events can be approved."
            );
        }

        event.setStatus(EventStatus.APPROVED);

        event.setAdminMessage(request.getMessage());
        event.setAdminReason(null);
        event.setReviewedAt(LocalDateTime.now());
        event.setUpdatedAt(LocalDateTime.now());

        Event updatedEvent =
                eventRepository.save(event);

        return EventMapper.toResponse(updatedEvent);
    }
    @Transactional
    public EventResponse approveUpdateRequest(Long requestId) {

        EventUpdateRequest updateRequest =
                eventUpdateRequestRepository.findById(requestId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Update request not found."
                                ));

        if (updateRequest.getStatus()
                != UpdateRequestStatus.PENDING) {

            throw new UnauthorizedActionException(
                    "This update request has already been reviewed."
            );
        }

        Event event = updateRequest.getEvent();
        if (event.getStatus() != EventStatus.APPROVED) {
            throw new UnauthorizedActionException(
                    "Update request cannot be approved because the event is no longer approved."
            );
        }

        event.setTitle(updateRequest.getTitle());
        event.setDescription(updateRequest.getDescription());
        event.setVenue(updateRequest.getVenue());
        event.setEventDate(updateRequest.getEventDate());
        event.setRegistrationDeadline(
                updateRequest.getRegistrationDeadline()
        );
        event.setCategory(updateRequest.getCategory());
        event.setMaxParticipants(
                updateRequest.getMaxParticipants()
        );
        event.setRegistrationFee(
                updateRequest.getRegistrationFee()
        );
        event.setImageUrl(updateRequest.getImageUrl());

        // Event remains approved
        event.setStatus(EventStatus.APPROVED);
        event.setUpdatedAt(LocalDateTime.now());

        updateRequest.setStatus(UpdateRequestStatus.APPROVED);
        updateRequest.setReviewedAt(LocalDateTime.now());

        eventRepository.save(event);
        eventUpdateRequestRepository.save(updateRequest);

        return EventMapper.toResponse(event);
    }

    public EventResponse takeDownEvent(
            Long id,
            AdminEventDecisionRequest request) {

        Event event = eventRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Event not found."
                        ));

        if (event.getStatus() == EventStatus.TAKEN_DOWN) {
            throw new UnauthorizedActionException(
                    "Event is already taken down."
            );
        }

        event.setStatus(EventStatus.TAKEN_DOWN);

        List<EventUpdateRequest> pendingRequests =
                eventUpdateRequestRepository.findByEventAndStatus(
                        event,
                        UpdateRequestStatus.PENDING
                );

        for (EventUpdateRequest updateRequest : pendingRequests) {
            updateRequest.setStatus(UpdateRequestStatus.REJECTED);
            updateRequest.setAdminReason(
                    "Event was taken down by the administrator."
            );
            updateRequest.setReviewedAt(LocalDateTime.now());
        }

        eventUpdateRequestRepository.saveAll(pendingRequests);

        if (request != null) {
            event.setAdminReason(request.getMessage());
        } else {
            event.setAdminReason(null);
        }

        event.setAdminMessage(null);
        event.setTakenDownAt(LocalDateTime.now());
        event.setReviewedAt(LocalDateTime.now());
        event.setUpdatedAt(LocalDateTime.now());

        Event updatedEvent =
                eventRepository.save(event);

        return EventMapper.toResponse(updatedEvent);
    }

    public List<EventResponse> getMyEvents() {

        User organizer = securityUtil.getCurrentUser();

        List<Event> events =
                eventRepository.findByOrganizer(organizer);

        return events.stream()
                .map(EventMapper::toResponse)
                .toList();
    }
    public EventResponse rejectEvent(
            Long id,
            AdminEventDecisionRequest request) {

        Event event = eventRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Event not found."
                        ));

        if (event.getStatus() != EventStatus.PENDING) {
            throw new UnauthorizedActionException(
                    "Only pending events can be rejected."
            );
        }

        event.setStatus(EventStatus.REJECTED);

        event.setAdminReason(request.getMessage());
        event.setAdminMessage(null);
        event.setReviewedAt(LocalDateTime.now());
        event.setUpdatedAt(LocalDateTime.now());

        Event updatedEvent =
                eventRepository.save(event);

        return EventMapper.toResponse(updatedEvent);
    }
    public void deleteEvent(Long id) {

        User organizer = securityUtil.getCurrentUser();

        Event event = eventRepository
                .findByIdAndOrganizer(id, organizer)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Event not found."));

        if (event.getStatus() != EventStatus.PENDING
                && event.getStatus() != EventStatus.REJECTED) {

            throw new UnauthorizedActionException(
                    "Only pending or rejected events can be deleted.");
        }

        eventRepository.delete(event);
    }
    public OrganizerDashboardResponse getOrganizerDashboard() {

        User organizer = securityUtil.getCurrentUser();

        return OrganizerDashboardResponse.builder()
                .totalEvents(
                        eventRepository.countByOrganizer(organizer))
                .pendingEvents(
                        eventRepository.countByOrganizerAndStatus(
                                organizer,
                                EventStatus.PENDING))
                .approvedEvents(
                        eventRepository.countByOrganizerAndStatus(
                                organizer,
                                EventStatus.APPROVED))
                .rejectedEvents(
                        eventRepository.countByOrganizerAndStatus(
                                organizer,
                                EventStatus.REJECTED))
                .build();
    }
    public List<EventResponse> searchEvents(String keyword) {

        List<Event> events =
                eventRepository.findByStatusAndTitleContainingIgnoreCase(
                        EventStatus.APPROVED,
                        keyword);

        return events.stream()
                .map(EventMapper::toResponse)
                .toList();
    }
    public List<EventResponse> getEventsByCategory(EventCategory category) {

        List<Event> events =
                eventRepository.findByStatusAndCategory(
                        EventStatus.APPROVED,
                        category);

        return events.stream()
                .map(EventMapper::toResponse)
                .toList();
    }
    public List<EventResponse> getUpcomingEvents() {

        List<Event> events =
                eventRepository
                        .findByStatusAndEventDateGreaterThanEqualOrderByEventDateAsc(
                                EventStatus.APPROVED,
                                LocalDate.now());

        return events.stream()
                .map(EventMapper::toResponse)
                .toList();
    }

}

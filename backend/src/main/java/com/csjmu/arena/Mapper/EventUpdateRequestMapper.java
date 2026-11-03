package com.csjmu.arena.mapper;

import com.csjmu.arena.dto.EventUpdateRequestResponse;
import com.csjmu.arena.entity.EventUpdateRequest;

public class EventUpdateRequestMapper {

    public static EventUpdateRequestResponse toResponse(
            EventUpdateRequest request) {

        return EventUpdateRequestResponse.builder()
                .id(request.getId())
                .eventId(request.getEvent().getId())
                .organizerName(
                        request.getOrganizer().getFullName()
                )
                .title(request.getTitle())
                .description(request.getDescription())
                .venue(request.getVenue())
                .eventDate(request.getEventDate())
                .registrationDeadline(
                        request.getRegistrationDeadline()
                )
                .category(request.getCategory())
                .maxParticipants(
                        request.getMaxParticipants()
                )
                .registrationFee(
                        request.getRegistrationFee()
                )
                .imageUrl(request.getImageUrl())
                .status(request.getStatus())
                .adminReason(request.getAdminReason())
                .requestedAt(request.getRequestedAt())
                .reviewedAt(request.getReviewedAt())
                .build();
    }
}
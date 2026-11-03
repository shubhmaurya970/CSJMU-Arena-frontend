package com.csjmu.arena.repository;

import com.csjmu.arena.entity.Event;
import com.csjmu.arena.entity.EventUpdateRequest;
import com.csjmu.arena.entity.UpdateRequestStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventUpdateRequestRepository
        extends JpaRepository<EventUpdateRequest, Long> {

    List<EventUpdateRequest> findByStatus(UpdateRequestStatus status);

    List<EventUpdateRequest> findByOrganizerId(Long organizerId);

    List<EventUpdateRequest> findByEvent(Event event);

    boolean existsByEventAndStatus(
            Event event,
            UpdateRequestStatus status
    );
    List<EventUpdateRequest> findByEventAndStatus(
            Event event,
            UpdateRequestStatus status
    );

}
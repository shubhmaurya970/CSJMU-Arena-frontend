package com.csjmu.arena.dto;

import com.csjmu.arena.entity.EventCategory;
import com.csjmu.arena.entity.UpdateRequestStatus;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventUpdateRequestResponse {

    private Long id;

    private Long eventId;

    private String organizerName;

    private String title;

    private String description;

    private String venue;

    private LocalDate eventDate;

    private LocalDate registrationDeadline;

    private EventCategory category;

    private Integer maxParticipants;

    private Double registrationFee;

    private String imageUrl;

    private UpdateRequestStatus status;

    private String adminReason;

    private LocalDateTime requestedAt;

    private LocalDateTime reviewedAt;
}
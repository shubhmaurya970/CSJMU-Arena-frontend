package com.csjmu.arena.dto;

import com.csjmu.arena.entity.EventCategory;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpdateEventRequest {

    private String title;

    private String description;

    private String venue;

    private LocalDate eventDate;

    private LocalDate registrationDeadline;

    private EventCategory category;

    private Integer maxParticipants;

    private Double registrationFee;

    private String imageUrl;
}
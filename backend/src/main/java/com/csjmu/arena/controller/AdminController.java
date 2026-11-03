package com.csjmu.arena.controller;

import com.csjmu.arena.dto.EventResponse;
import com.csjmu.arena.response.ApiResponse;
import com.csjmu.arena.service.EventService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.csjmu.arena.dto.AdminDashboardResponse;
import com.csjmu.arena.service.AdminService;
import java.util.List;
import com.csjmu.arena.dto.AdminEventDecisionRequest;
import jakarta.validation.Valid;
import com.csjmu.arena.dto.EventUpdateRequestResponse;


@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private final EventService eventService;
    private final AdminService adminService;

    public AdminController(EventService eventService,
                           AdminService adminService) {

        this.eventService = eventService;
        this.adminService = adminService;

    }

    @GetMapping("/events/pending")
    public ApiResponse<List<EventResponse>> getPendingEvents() {

        List<EventResponse> events = eventService.getAllPendingEvents();

        return ApiResponse.<List<EventResponse>>builder()
                .success(true)
                .message("Pending events fetched successfully.")
                .data(events)
                .build();
    }
    @PatchMapping("/events/{id}/approve")
    public ApiResponse<EventResponse> approveEvent(
            @PathVariable Long id,
            @Valid @RequestBody AdminEventDecisionRequest request) {

        EventResponse response =
                eventService.approveEvent(id, request);

        return ApiResponse.<EventResponse>builder()
                .success(true)
                .message("Event approved successfully.")
                .data(response)
                .build();
    }
    @PatchMapping("/events/{id}/reject")
    public ApiResponse<EventResponse> rejectEvent(
            @PathVariable Long id,
            @Valid @RequestBody AdminEventDecisionRequest request) {

        EventResponse response =
                eventService.rejectEvent(id, request);

        return ApiResponse.<EventResponse>builder()
                .success(true)
                .message("Event rejected successfully.")
                .data(response)
                .build();
    }
    @PatchMapping("/events/{id}/take-down")
    public ApiResponse<EventResponse> takeDownEvent(
            @PathVariable Long id,
            @Valid @RequestBody AdminEventDecisionRequest request) {

        EventResponse response =
                eventService.takeDownEvent(id, request);

        return ApiResponse.<EventResponse>builder()
                .success(true)
                .message("Event taken down successfully.")
                .data(response)
                .build();
    }
    @GetMapping("/dashboard")
    public ApiResponse<AdminDashboardResponse> getDashboard() {

        AdminDashboardResponse response =
                adminService.getDashboardStats();

        return ApiResponse.<AdminDashboardResponse>builder()
                .success(true)
                .message("Dashboard statistics fetched successfully.")
                .data(response)
                .build();
    }
    @GetMapping("/event-update-requests")
    public ApiResponse<List<EventUpdateRequestResponse>>
    getPendingUpdateRequests() {

        List<EventUpdateRequestResponse> requests =
                eventService.getPendingUpdateRequests();

        return ApiResponse.<List<EventUpdateRequestResponse>>builder()
                .success(true)
                .message(
                        "Pending event update requests fetched successfully."
                )
                .data(requests)
                .build();
    }
    @PatchMapping("/event-update-requests/{id}/approve")
    public ApiResponse<EventResponse> approveUpdateRequest(
            @PathVariable Long id) {

        EventResponse response =
                eventService.approveUpdateRequest(id);

        return ApiResponse.<EventResponse>builder()
                .success(true)
                .message(
                        "Event update request approved successfully."
                )
                .data(response)
                .build();
    }
    @PatchMapping("/event-update-requests/{id}/reject")
    public ApiResponse<EventUpdateRequestResponse>
    rejectUpdateRequest(
            @PathVariable Long id,
            @Valid @RequestBody AdminEventDecisionRequest request) {

        EventUpdateRequestResponse response =
                eventService.rejectUpdateRequest(id, request);

        return ApiResponse.<EventUpdateRequestResponse>builder()
                .success(true)
                .message(
                        "Event update request rejected successfully."
                )
                .data(response)
                .build();
    }
    @GetMapping("/events/approved")
    public ApiResponse<List<EventResponse>> getApprovedEvents() {

        List<EventResponse> events =
                eventService.getAllApprovedEvents();

        return ApiResponse.<List<EventResponse>>builder()
                .success(true)
                .message("Approved events fetched successfully.")
                .data(events)
                .build();
    }
    @GetMapping("/events/rejected")
    public ApiResponse<List<EventResponse>> getRejectedEvents() {

        List<EventResponse> events =
                eventService.getAllRejectedEvents();

        return ApiResponse.<List<EventResponse>>builder()
                .success(true)
                .message("Rejected events fetched successfully.")
                .data(events)
                .build();
    }
    @GetMapping("/events/taken-down")
    public ApiResponse<List<EventResponse>> getTakenDownEvents() {

        List<EventResponse> events =
                eventService.getAllTakenDownEvents();

        return ApiResponse.<List<EventResponse>>builder()
                .success(true)
                .message("Taken down events fetched successfully.")
                .data(events)
                .build();
    }


}
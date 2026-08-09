package com.csjmu.arena.service;

import com.csjmu.arena.dto.LoginRequest;
import com.csjmu.arena.dto.LoginResponse;
import com.csjmu.arena.security.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import com.csjmu.arena.security.CustomUserDetailsService;
import com.csjmu.arena.entity.User;
import com.csjmu.arena.repository.UserRepository;
@Service
public class AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final CustomUserDetailsService customUserDetailsService;
    private final UserRepository userRepository;

    public AuthenticationService(AuthenticationManager authenticationManager,
                                 JwtService jwtService,
                                 CustomUserDetailsService customUserDetailsService,
                                 UserRepository userRepository){

        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.customUserDetailsService = customUserDetailsService;
    }

    public LoginResponse login(LoginRequest request) {

        authenticationManager.authenticate(

                new UsernamePasswordAuthenticationToken(

                        request.getEmail(),
                        request.getPassword()

                )

        );

        UserDetails user = customUserDetailsService
                .loadUserByUsername(request.getEmail());

        String token = jwtService.generateToken(user);
        User loggedInUser = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        return LoginResponse.builder()
                .token(token)
                .type("Bearer")
                .name(loggedInUser.getFullName())
                .email(loggedInUser.getEmail())
                .role(loggedInUser.getRole().name())
                .build();

    }

}
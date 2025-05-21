package org.example.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(a -> a
//                        .requestMatchers("/api/auth/me").authenticated()
//                        .requestMatchers("/api/secured").authenticated()
                          .anyRequest().permitAll()
                )
                .logout(l -> l.logoutSuccessUrl("https://kochheld.onrender.com/"))
                .oauth2Login(o -> o.defaultSuccessUrl("https://kochheld.onrender.com/"));
        return http.build();
    }

}
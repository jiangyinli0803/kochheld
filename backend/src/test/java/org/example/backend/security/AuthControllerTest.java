package org.example.backend.security;
import org.example.backend.configuration.OAuth2TestConfig;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.oidcLogin;

@SpringBootTest
@AutoConfigureMockMvc
class AuthControllerTest {
   @Autowired
    private MockMvc mockMvc;

    @Test
    void getMe() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/auth/me")
                .with(oidcLogin().userInfoToken(token -> token
                        .claim("login", "testUser"))))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("testUser"));
    }

}
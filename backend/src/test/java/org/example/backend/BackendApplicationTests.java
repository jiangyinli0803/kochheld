package org.example.backend;

import org.example.backend.configuration.OAuth2TestConfig;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;

@SpringBootTest
@Import(OAuth2TestConfig.class)
class BackendApplicationTests {

    @Test
    void contextLoads() {
    }

}

package org.example.backend.controller;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.backend.configuration.OAuth2TestConfig;
import org.example.backend.model.chatgpt.*;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.web.client.RestClient;
import static org.junit.jupiter.api.Assertions.*;
import java.util.List;

import static org.mockito.Mockito.*;

@SpringBootTest(properties="OpenAi_API_Key=dummy-test-key")
@Import(OAuth2TestConfig.class)
class AiRecipeControllerTest {

    @Mock RestClient restClient;
    @Mock RestClient.RequestBodyUriSpec uriSpec;
    @Mock RestClient.RequestBodySpec bodySpec;
    @Mock RestClient.ResponseSpec respSpec;
    @Mock ObjectMapper mapper;

    @InjectMocks
    AiRecipeController controller;

    @Test
    @WithMockUser(username = "tester")
    void searchByIngredient_returnsRecipe() throws Exception {

        /* ---------- Arrange ---------- */
        String ingredient = "test";

        when(restClient.post()).thenReturn(uriSpec);
        when(uriSpec.body(any(ChatgptRequest.class))).thenReturn(bodySpec);
        when(bodySpec.retrieve()).thenReturn(respSpec);

        ChatgptMessage msg = new ChatgptMessage(
                "assistant",
                """
                { "title":"Test Rezept",
                  "ingredients":["1 Test Zutat"],
                  "description":"Test Beschreibung" }
                """
        );
        ChatgptChoice   choice = new ChatgptChoice(msg);
        ChatgptResponse gptResp = new ChatgptResponse(List.of(choice));
        when(respSpec.body(ChatgptResponse.class)).thenReturn(gptResp);

        AiRecipe expected = new AiRecipe(
                "Test Rezept",
                List.of("1 Test Zutat"),
                "Test Beschreibung");
        when(mapper.readValue(anyString(), eq(AiRecipe.class)))
                .thenReturn(expected);

        /* ---------- Act ---------- */
        AiRecipe result = controller.searchByIngredient(ingredient);

        /* ----- Assert ----- */
        assertEquals(expected, result);
    }
}

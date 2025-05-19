package org.example.backend.controller;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.backend.model.chatgpt.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.web.client.RestClient;
import static org.junit.jupiter.api.Assertions.*;
import java.util.List;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AiRecipeControllerTest {

    @Mock
    RestClient restClient;
    @Mock  RestClient.RequestBodyUriSpec uriSpec;
    @Mock  RestClient.RequestBodySpec bodySpec;
    @Mock  RestClient.ResponseSpec respSpec;
    @Mock  ObjectMapper mapper;

    @InjectMocks
    AiRecipeController controller;    // 让 Mockito 注入上面两个 mock

    @Test
    @WithMockUser
        // 如果你的方法里不依赖 SecurityContext 可以省掉
    void searchByIngredient_returnsRecipe() throws Exception {

        /* ---------- Arrange ---------- */
        String ingredient = "test";

        when(restClient.post()).thenReturn(uriSpec);
        when(uriSpec.body(any(ChatgptRequest.class))).thenReturn(bodySpec);
        when(bodySpec.retrieve()).thenReturn(respSpec);

        // 1️⃣ 先构造 message
        ChatgptMessage msg = new ChatgptMessage(
                "assistant",
                """
                { "title":"Test Rezept",
                  "ingredients":["1 Test Zutat"],
                  "description":"Test Beschreibung" }
                """
        );

// 2️⃣ 再构造 choice
        ChatgptChoice choice = new ChatgptChoice(msg);

// 3️⃣ 最后构造 ChatgptResponse
        ChatgptResponse gptResp = new ChatgptResponse(List.of(choice));

// 4️⃣ Stub RestClient 返回
        when(respSpec.body(ChatgptResponse.class)).thenReturn(gptResp);

        AiRecipe expected = new AiRecipe("Test Rezept", List.of("1 Test Zutat"), "Test Beschreibung");
        when(mapper.readValue(anyString(), eq(AiRecipe.class))).thenReturn(expected);

        /* ---------- Act ---------- */
        AiRecipe result = controller.searchByIngredient(ingredient);

        /* ---------- Assert ---------- */
        assertEquals(expected, result);
    }
}

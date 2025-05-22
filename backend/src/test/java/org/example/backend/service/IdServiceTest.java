package org.example.backend.service;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class IdServiceTest {

    private final IdService idService = new IdService();

    @Test
    void setIdService(){
        String id1 = idService.createId();
        String id2 = idService.createId();

        assertNotNull(id1);
        assertNotNull(id2);
        assertNotEquals(id1, id2);
    }

}
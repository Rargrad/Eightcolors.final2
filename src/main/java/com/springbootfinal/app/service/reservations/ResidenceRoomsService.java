package com.springbootfinal.app.service.reservations;

import com.springbootfinal.app.domain.reservations.ResidenceRoomsDto;
import com.springbootfinal.app.mapper.reservations.ResidenceRoomsMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ResidenceRoomsService {

    @Autowired
    private ResidenceRoomsMapper residenceRoomsMapper;

    public List<ResidenceRoomsDto> residenceRooms() {

        return residenceRoomsMapper.residenceRooms();
    }
}

package com.springbootfinal.app.mapper.reservations;

import com.springbootfinal.app.domain.reservations.ResidenceRoomsDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ResidenceRoomsMapper {

    List<ResidenceRoomsDto> residenceRooms();
}

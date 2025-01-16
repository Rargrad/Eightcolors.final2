package com.springbootfinal.app.controller.reservations;

import com.springbootfinal.app.service.reservations.ResidenceRoomsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Slf4j
public class ResidenceRoomsController {

    @Autowired
    private ResidenceRoomsService residenceRoomsService;

    @GetMapping("/residenceRooms")
    public String residenceRooms(Model model) {
        model.addAttribute("rRooms", residenceRoomsService.residenceRooms());
        return "views/reservations/residenceRooms";
    }
}

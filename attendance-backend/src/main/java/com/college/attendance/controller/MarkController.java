package com.college.attendance.controller;

import com.college.attendance.entity.Mark;
import com.college.attendance.service.MarkService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/marks")
@CrossOrigin("*")
public class MarkController {

    private final MarkService service;

    public MarkController(MarkService service) {
        this.service = service;
    }

    @PostMapping
    public Mark save(@RequestBody Mark mark) {
        return service.save(mark);
    }

    @GetMapping("/{studentId}")
    public List<Mark> getByStudent(@PathVariable Long studentId) {
        return service.getByStudent(studentId);
    }
}

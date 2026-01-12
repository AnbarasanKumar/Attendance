package com.college.attendance.controller;

import com.college.attendance.entity.Attendance;
import com.college.attendance.service.AttendanceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin("*")
public class AttendanceController {

    private final AttendanceService service;

    public AttendanceController(AttendanceService service) {
        this.service = service;
    }

    @PostMapping
    public Attendance mark(@RequestBody Attendance attendance) {
        return service.markAttendance(attendance);
    }

    @GetMapping("/{studentId}")
    public List<Attendance> getByStudent(@PathVariable Long studentId) {
        return service.getByStudent(studentId);
    }
}

package com.college.attendance.service;

import com.college.attendance.entity.Attendance;
import com.college.attendance.repository.AttendanceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendanceService {

    private final AttendanceRepository repo;

    public AttendanceService(AttendanceRepository repo) {
        this.repo = repo;
    }

    public Attendance markAttendance(Attendance attendance) {

        Long studentId = attendance.getStudent().getId();

        if (repo.existsByStudentIdAndDate(studentId, attendance.getDate())) {
            throw new RuntimeException("Attendance already marked for this date");
        }

        return repo.save(attendance);
    }

    public List<Attendance> getByStudent(Long studentId) {
        return repo.findByStudentId(studentId);
    }
}

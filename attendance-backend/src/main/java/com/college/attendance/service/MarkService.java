package com.college.attendance.service;

import com.college.attendance.entity.Mark;
import com.college.attendance.repository.MarkRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarkService {

    private final MarkRepository repo;

    public MarkService(MarkRepository repo) {
        this.repo = repo;
    }

    public Mark save(Mark mark) {
        return repo.save(mark);
    }

    public List<Mark> getByStudent(Long studentId) {
        return repo.findByStudentId(studentId);
    }
}

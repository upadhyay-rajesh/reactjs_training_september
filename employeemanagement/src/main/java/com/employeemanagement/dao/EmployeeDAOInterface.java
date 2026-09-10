package com.employeemanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employeemanagement.entity.Employee;

@Repository
public interface EmployeeDAOInterface extends JpaRepository<Employee, Integer> {

}

package com.employeemanagement.service;

import java.util.List;

import com.employeemanagement.entity.Employee;

public interface EmployeeServiceInterface {

	List<Employee> getAllEmployee();

	String createEmployeeService(Employee ee);

	String deleteEmployeeService(int id);

	String deleteEmployeeService(Employee ee);

	Employee getEmployeeById(int id);

}

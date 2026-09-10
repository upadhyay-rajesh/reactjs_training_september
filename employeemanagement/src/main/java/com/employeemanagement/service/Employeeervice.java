package com.employeemanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.employeemanagement.dao.EmployeeDAOInterface;
import com.employeemanagement.entity.Employee;

@Service
@Transactional
public class Employeeervice implements EmployeeServiceInterface {
	
	@Autowired
	private EmployeeDAOInterface ed;

	@Override
	public List<Employee> getAllEmployee() {
		// TODO Auto-generated method stub
		return ed.findAll();
	}

	@Override
	public String createEmployeeService(Employee ee) {
		ed.save(ee);
		return "record created";
	}

	@Override
	public String deleteEmployeeService(int id) {
		ed.deleteById(id);
		return "record deleted";
	}

	@Override
	public String deleteEmployeeService(Employee ee) {
		ed.saveAndFlush(ee);
		return "record edited";
	}

	@Override
	public Employee getEmployeeById(int id) {
		Optional<Employee> e1=  ed.findById(id);
		return e1.get();
	}

}

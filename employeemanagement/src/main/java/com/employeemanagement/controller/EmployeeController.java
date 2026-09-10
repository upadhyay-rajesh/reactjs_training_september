package com.employeemanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.employeemanagement.entity.Employee;
import com.employeemanagement.service.EmployeeServiceInterface;

@RestController
@CrossOrigin("*")
@RequestMapping("/employee")
public class EmployeeController {
	
	@Autowired
	private EmployeeServiceInterface ei;

	@GetMapping
	public List<Employee> getAllEmployee(){
		return ei.getAllEmployee();
	}
	
	@GetMapping("/{id}")
	public Employee getEmployee(@PathVariable("id") String id) {
		return ei.getEmployeeById(Integer.parseInt(id));
	}
	
	@PostMapping
	public String createEmployee(@RequestBody Employee ee) {
		return ei.createEmployeeService(ee);
	}
	@DeleteMapping("/{id}")
	public String deleteEmployee(@PathVariable("id") String id) {
		return ei.deleteEmployeeService(Integer.parseInt(id));
	}
	@PutMapping("/{id}")
	public String editEmployee(@RequestBody Employee ee,@PathVariable("id") String id) {
		return ei.deleteEmployeeService(ee);
	}
}

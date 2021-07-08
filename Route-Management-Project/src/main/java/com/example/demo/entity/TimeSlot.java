package com.example.demo.entity;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class TimeSlot {
	
	private int  id;
	private LocalTime timeSlot;
	int isDeleted;
	String createdBy;
	String modifiedBy;
	LocalDate createdDate;
	LocalDate modifiedDate;



}

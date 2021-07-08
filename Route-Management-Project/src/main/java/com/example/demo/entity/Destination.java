package com.example.demo.entity;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "routeManagement")
@Component
public class Destination {
	@Id

	private int id;
	private String destination;

	private List<DropPoint> dropPoints;
	
	
	private List<TimeSlot> timeSlots;
	int isDeleted;
	String createdBy;
	String modifiedBy;
	LocalDate createdDate;
	LocalDate modifiedDate;

	
	// to add a new dropPoint to the existing list
	public boolean addDropPointToList(DropPoint dropPoint) {
		return this.dropPoints.add(dropPoint);
	}

	public boolean addDropPointToList(TimeSlot timeSlot) {
		return this.timeSlots.add(timeSlot);
	}

}

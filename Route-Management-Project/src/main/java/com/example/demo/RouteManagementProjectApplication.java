package com.example.demo;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.example.demo.entity.Destination;
import com.example.demo.entity.DropPoint;
import com.example.demo.entity.TimeSlot;
import com.example.demo.repo.DestinationRepo;

@SpringBootApplication

public class RouteManagementProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(RouteManagementProjectApplication.class, args);

	}}

//	@Bean
//	public CommandLineRunner runner() {
//		return new CommandLineRunner() {
//
//			@Autowired
//			DestinationRepo repo;
//
//			@Override
//			public void run(String... args) throws Exception {
//				List<DropPoint> dropPoint = new ArrayList<DropPoint>();
//				LocalDate date =LocalDate.parse("December 15, 2019", DateTimeFormatter.ofPattern("MMMM dd, yyyy"));
//				DropPoint point1 = new DropPoint( "sivagasi",0,"admin","adminnnn",date,date);
//				DropPoint point2 = new DropPoint( "villupuram",0,"admin","adminnnn",date,date);
//				DropPoint point3 = new DropPoint( "madhurai",0,"admin","adminnnn",date,date);
//				DropPoint point4 = new DropPoint( "theni",0,"admin","adminnnn",date,date);
//				DropPoint point5 = new DropPoint( "andhra",0,"admin","adminnnn",date,date);
//				dropPoint.add(point1);
//				dropPoint.add(point2);
//				dropPoint.add(point3);
//				dropPoint.add(point4);
//				dropPoint.add(point5);
//				
//				
//				
//
//				List<TimeSlot> timeSlot = new ArrayList<>();
//				TimeSlot slot1 = new TimeSlot( LocalTime.of(3, 10),0,"admin","adminnnn",date,date);
//				TimeSlot slot2 = new TimeSlot( LocalTime.of(7, 45),0,"admin","adminnnn",date,date);
//				TimeSlot slot3 = new TimeSlot( LocalTime.of(2, 30),0,"admin","adminnnn",date,date);
//				TimeSlot slot4 = new TimeSlot( LocalTime.of(1, 30),0,"admin","adminnnn",date,date);
//				TimeSlot slot5= new TimeSlot( LocalTime.of(7, 30),0,"admin","adminnnn",date,date);
//				timeSlot.add(slot1);
//				timeSlot.add(slot2);
//				timeSlot.add(slot3);
//				timeSlot.add(slot4);
//				timeSlot.add(slot5);
//				
//				//LocalDate date =LocalDate.parse("December 15, 2019", DateTimeFormatter.ofPattern("MMMM dd, yyyy"));
//				repo.save(new Destination( "Coyambedu", dropPoint, timeSlot,
//						0,"admin","adminnnn",date,date));
//
//			}
//		};
//
//	}
//}
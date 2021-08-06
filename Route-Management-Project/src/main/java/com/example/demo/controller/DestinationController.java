package com.example.demo.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.bl.DestinationBL;
import com.example.demo.dl.DestinationDL;
import com.example.demo.entity.Destination;
import com.example.demo.entity.DropPoint;
import com.example.demo.entity.TimeSlot;
import com.example.demo.repo.DestinationRepo;

@RestController
@RequestMapping(path = "/api/v1/")
@CrossOrigin(origins = "*")
public class DestinationController {

	@Autowired
	DestinationDL dlLayer;
	@Autowired
	DestinationBL blLayer;
	@Autowired
	DestinationRepo repo;

	@GetMapping(path = "/managingRoute")
	public ResponseEntity<List<Destination>> getAllRoute() {

		List<Destination> destination = null;

		try {
			destination = this.blLayer.finfByIsDeleted(0);
		} catch (Exception e) {

			System.out.println("Problem in getting datas");
		}

		return ResponseEntity.status(HttpStatus.OK).body(destination);
	}

	@PostMapping(path = "/managingRoute/newRoute")
	public ResponseEntity<Destination> addNewRoute(@RequestBody Destination entity) {

		Destination post = null;
		try {
			Optional<Destination> dest = repo.findByDestination(entity.getDestination());
			if (dest.isPresent()) {
				if (dest.get().getIsDeleted() == 1) {

					repo.save(entity);
					return ResponseEntity.status(HttpStatus.CREATED).body(entity);
				}

				else {
					return ResponseEntity.status(HttpStatus.ALREADY_REPORTED).body(entity);
				}

			}

			post = blLayer.addDestination(entity);
		} catch (Exception e) {

			System.out.println("Problem in posting your datas");
		}

		return ResponseEntity.status(HttpStatus.CREATED).body(post);
	}

	@PutMapping(path = "/put/deleteRouteDetails/{destination}")
	public ResponseEntity<Destination> deleteRoute(@PathVariable("destination") String destination) {

		Destination RouteInfo = null;
		try {
			RouteInfo = this.dlLayer.deleteRoute(destination);
		} catch (Exception e) {

			System.out.println("Details not deleted yet");
		}

		return ResponseEntity.status(HttpStatus.OK).body(RouteInfo);
	}

	@PutMapping(path = "/updateRouteInfo/{destination}")
	public ResponseEntity<Destination> editRouteDetails(@PathVariable("destination") String destination,
			@RequestBody Destination updateRouteInfo) {
		Destination saveRouteInfo = null;

		try {
			Destination dest = repo.findByDestination(destination).get();
			dest.setIsDeleted(0);

			dest.setModifiedBy("Admin");
			dest.setModifiedDate(LocalDate.now());

			dest.setTimeSlots(updateRouteInfo.getTimeSlots());
			dest.setDropPoints(updateRouteInfo.getDropPoints());

			saveRouteInfo = repo.save(dest);
		} catch (Exception e) {

			System.out.println("Problem in updating your details");
		}

		return ResponseEntity.status(HttpStatus.OK).body(saveRouteInfo);
	}

	@GetMapping(path = "/editRoute/{destination}")
	public ResponseEntity<Destination> getDestinationDetails(@PathVariable("destination") String destination) {
		Optional<Destination> details = null;
		try {
			details = this.repo.findByDestination(destination);
		} catch (Exception e) {

			e.printStackTrace();
		}
		return ResponseEntity.status(HttpStatus.OK).body(details.get());
	}

	@GetMapping(path = "/managigRoute/all/destName")
	public ResponseEntity<List<String>> getdestName() {
		List<String> destName = null;
		try {
			destName = this.dlLayer.findAllDestName();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Probelm in getting all the destination name");
		}

		return ResponseEntity.status(HttpStatus.OK).body(destName);
	}

}

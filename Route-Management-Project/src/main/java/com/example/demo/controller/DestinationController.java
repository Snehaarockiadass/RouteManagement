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
	public ResponseEntity<List<Destination>> getRoute() {

		List<Destination> destination = this.blLayer.getRoute();

		return ResponseEntity.status(HttpStatus.OK).body(destination);
	}

	@GetMapping(path = "/managigRoute/all/destName")
	public ResponseEntity<List<String>> getdestName() {
		List<String> destName = this.dlLayer.findAllDestName();

		return ResponseEntity.status(HttpStatus.OK).body(destName);
	}

	@PostMapping(path = "/managingRoute/post")
	public ResponseEntity<Destination> addPlan(@RequestBody Destination entity) {
		Destination post = blLayer.addDestination(entity);
		Destination reqCab = entity;
    	reqCab.setIsDeleted('0');
    	
    	Destination createdBy=entity;
    	createdBy.setCreatedBy("Admin");
    	
    	Destination createdDate=entity;
    	createdDate.setCreatedDate(LocalDate.now());

		return ResponseEntity.status(HttpStatus.CREATED).body(post);
	}

	@GetMapping(path = "/managingRoute/name/{destination}")
	public List<Destination> getByDestName(@PathVariable("destination") String destination) {
		return this.dlLayer.findByDestination(destination);
	}

	@PutMapping(path = "/managingRoute/delete/{destId}")
	public ResponseEntity<Destination> deleteBy(@PathVariable("destId") Integer destId,
			@RequestBody Destination deleteInfo) {

		
		Destination isDeleteFlag=deleteInfo;
		isDeleteFlag.setIsDeleted('1');
		
		Destination modifiedBy=deleteInfo;
    	modifiedBy.setModifiedBy("Admin");
    	
    	Destination modifiedDate=deleteInfo;
    	modifiedDate.setModifiedDate(LocalDate.now());
		
		
		
		Optional<Destination> entity = blLayer.findById(destId);
		Destination deleteHistory = null;
		if (entity.isPresent()) {
			deleteHistory = entity.get();
			this.blLayer.deleteById(deleteInfo);
		} else {
			throw new NoSuchElementException("No such element to delete");
		}

		return ResponseEntity.status(HttpStatus.OK).body(deleteHistory);
	}

	@GetMapping(path = "/managingRoute/id/{destId}")
	public ResponseEntity<Destination> getById(@PathVariable("destId") int destId) {

		Optional<Destination> optDestObj = this.blLayer.findById(destId);

		Destination destObj = null;
	    if (optDestObj.isPresent()) {
			destObj = optDestObj.get();
			return ResponseEntity.status(HttpStatus.OK).body(destObj);
		}

		else {
			throw new RuntimeException("Destination not found");
		}

	}

	@PutMapping(path = "/route/addDropPoint")
	public ResponseEntity<Destination> addDropPoint(@RequestBody Destination destInfo) {

		Destination isDeleted = destInfo;
    	isDeleted.setIsDeleted('0');
    	
    	Destination modifiedBy=destInfo;
    	modifiedBy.setModifiedBy("Admin");
    	
    	Destination modifiedDate=destInfo;
    	modifiedDate.setModifiedDate(LocalDate.now());
		
		
		Destination post = dlLayer.addDropPoint(destInfo);

		return ResponseEntity.status(HttpStatus.CREATED).body(post);
	}

	@PutMapping(path = "/route/addTimeSlot")
	public ResponseEntity<Destination> addTimeSlot(@RequestBody Destination destInfo) {

		

		Destination isDeleted = destInfo;
    	isDeleted.setIsDeleted('0');
    	
    	Destination modifiedBy=destInfo;
    	modifiedBy.setModifiedBy("Admin");
    	
    	Destination modifiedDate=destInfo;
    	modifiedDate.setModifiedDate(LocalDate.now());
		
		Destination post = dlLayer.addTimeSlot(destInfo);

		return ResponseEntity.status(HttpStatus.CREATED).body(post);
	}

}

//	@GetMapping(path = "/managingRoute/{destId}")
//	public ResponseEntity<Destination> addDrop(@PathVariable("destId") int destId,
//			@PathVariable("dropPoint") DropPoint dropPoint) {
//
//		Optional<Destination> optDestObj = this.blLayer.findById(destId);
//		//Optional<Destination> optDestObj1 = this.blLayer.findById(destId);
//		
//
//		Destination destObj = null;
//		if (optDestObj.isPresent()) {
//			destObj = optDestObj.get();
//			return ResponseEntity.status(HttpStatus.OK).body(destObj);
//		}
//		
//		else {
//			throw new RuntimeException("Destination not found");
//		}
//
//	}
//	
//	@PostMapping(path = "/managingRoute/addPoint/{destId}")
//	public ResponseEntity<Destination> addDropPoint(@PathVariable("destId") int destId,
//			@PathVariable("dropPoint") DropPoint dropPoint) {
//
//		Optional<Destination> optDestObj = this.blLayer.findById(destId);
//		//Optional<Destination> optDestObj1 = this.blLayer.findById(destId);
//		Destination destObj = null;
//		 Destination saveDropPoint=null;
//		destObj = optDestObj.get();
//     Optional<Destination> dpt=    dropPoint.getDropPoint();
//     if(dpt.isPresent()) {
//    	 
//    	 throw new NoSuchElementException("DropPoint already exists");
//		}
//		
//		else {
//			saveDropPoint=this.point.addDropPointInfo(destObj);
//			
//		}
//		return ResponseEntity.status(HttpStatus.CREATED).body(saveDropPoint); 
//     }
//        
//		

//	@PutMapping(path="/route/addDropPoint")
//	public ResponseEntity<Destination> addDropPoint(@RequestBody Destination destInfo){
//		
//
//		Destination post = blLayer.save(destInfo);
//	
//		return ResponseEntity.status(HttpStatus.CREATED).body(post);
//	}
//	
//	@PostMapping(path="/route/addTimeSlot")
//	public ResponseEntity<Destination> addTimeSlot(@RequestBody Destination destInfo){
//		
//   
//		
//		Destination post = blLayer.save(destInfo);
//		
//		return ResponseEntity.status(HttpStatus.CREATED).body(post);
//	}
//	
//	
//}
//	

//	// method for adding a drop point
//	@PutMapping(path = "/managingRoute/add/{destId}")
//	public ResponseEntity<List<DropPoint>> addDropPointforDestination(@PathVariable("destId") int destId,
//			@RequestBody List<DropPoint> entity) {
//		
//		Optional<Destination> optDestObj = this.blLayer.findById(destId);
//		
//		
//		
//		boolean result = false;
//		
//		Destination destObj = null;
//		List<DropPoint> dropPointObj = null;
//		
//		
//		if (optDestObj.isPresent()) {
//			destObj = optDestObj.get();
//			}
//		else {
//			System.out.println(" Destination not present");
//			
//			
//		}
//		
//
//		
////      if(((DropPoint) entity).getDropPointName())			}
////		String	newDropPoint=entity.getDropPointName();
////		
////		if(newDropPoint.) {
////			
//		
//			
//			
//			
//			
//			
//			//call BL to check if drop point already exists -- beg
//			  // boolean result = checkIfDropPointExists(destinationID,entity);
//			//call BL to check if drop point already exists -- end
//			
//			
//			
//			if(!result || destObj.addDropPointToList(entity)) {
//				dropPointObj = entity;
//				return	ResponseEntity.status(HttpStatus.OK).body(dropPointObj);
//
//			}
//			    else {
//			    	throw new RuntimeException("DropPoint didn't added");
//			    }
//		}
//		
//		
//	}
////	// rohit - end

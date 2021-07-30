package com.example.demo.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.entity.Destination;
import com.example.demo.entity.DropPoint;
import com.example.demo.entity.TimeSlot;

public interface DestinationRepo extends MongoRepository<Destination, Integer> {

Optional<Destination> findByDestination(String destination);


List<Destination> findByIsDeleted(int isDeleted);

	
}


//ctrl+shift+f----- allignment
//ctrl+shift+o-----for getting all methods values
//ctrl+shift+c-----commending and uncommending

//ctrl+shift+L ---- gives a list of all shortcuts
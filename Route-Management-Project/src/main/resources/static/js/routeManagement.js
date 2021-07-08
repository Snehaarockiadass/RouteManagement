
				<p><a ><input id="btnAdd" type="button" value="Save" class="bat" window.location.href="routemanagement.html" /></a></p>

var xhrRouteDetails = new XMLHttpRequest();
 var xhrDest = new XMLHttpRequest();
        
        //On Load function tp call fetchSource() and fettchDestination()

        window.onload = call;

        function call(){
	
			managingRoute();
        	
        }
        
        
  var managingRouteXhr = new XMLHttpRequest();
        
        function managingRoute(){
	
			managingRouteXhr.open("GET","http://localhost:6062/api/v1/managingRoute",true);
			managingRouteXhr.onreadystatechange=routeProcessResponse;
			
			managingRouteXhr.send(null);
		}      
        
        var routeResponse;

		function routeProcessResponse(){
			
			if(managingRouteXhr.readyState == 4 && managingRouteXhr.status == 200){
				
				fetchDestination();
			}
			
			/*
			
      if(managingRouteXhr.readyState == 4 && managingRouteXhr.status == 227){
				
				routeResponse = JSON.parse(managingRouteXhr.responseText);
				
				
			   
			    var destOpt = document.createElement('option');
				destOpt.innerText = routeResponse.destination;
				destOpt.selected = "selected";
			    document.querySelector('#destination-opt').appendChild(destOpt);
			   
			    var dropOpt = document.createElement('option');
				dropOpt.innerText = routeResponse.dropPoint;
				dropOpt.selected = "selected";
			    document.querySelector('#dropPoint-opt').appendChild(dropOpt);
      	       
      	        var timeOpt = document.createElement('option');
				timeOpt.innerText = routeResponse.timeSlot;
				timeOpt.selected = "selected";
			    document.querySelector('#timeSlot-opt').appendChild(timeOpt);
      
				
			   document.getElementById("screen-title").innerHTML = "Route Info";
  	
  	      	   
      	       document.querySelector('#destination-opt').disabled = true;
      	       document.querySelector('#dropPoint-opt').disabled = true;
      	       document.querySelector('#timeSlot-opt').disabled = true;
			}*/
			
		}
		
		document.getElementById("destination-opt").addEventListener('click',function(){
 event.preventDefault();
  xhrRouteDetails.open("GET","http://localhost:6062/api/v1/managingRoute",true);
         
            xhrRouteDetails.onreadystatechange=destinationProcessResponse;
            xhrRouteDetails.send(null);
    
 });

      /* 
        //Fetches Destinations

        var destinations;

        function fetchDestination(){

            xhrDest.open("GET","http://localhost:6062/api/v1/managingRoute",true);
            xhrDest.onreadystatechange=processResponseOfDestination;
            xhrDest.send(null);

        }*/

        function destinationProcessResponse(){
        	if(xhrDest.readyState == 4 && xhrDest.status == 200){

        		destinations = JSON.parse(xhrDest.responseText);

                for(var i=0; i<destinations.length; i++){

        			var opt = document.createElement("option");
        			

                    opt.innerHTML = destinations[i].destination;

                    document.getElementById("destination-opt").options.add(opt);

                 }

              }
        }

        //Fetches Destinations - Ends
        
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
 
    /* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        //For Populating DropPoints and TimeSlots based on Destination

        document.getElementById("destination-opt").addEventListener('change',function(){
        	
        	//Clearing the options of DropPoint drop down
        	
        	var clearDropPoint = document.getElementById("dropPoint-opt");
        	var dropOptLength = clearDropPoint.options.length;
        	
                        for (i = dropOptLength-1; i > 0; i--) {
                          clearDropPoint.options[i] = null;
                        }
                        
        	//Clearing the options of TimeSlot drop down
            
            var clearTimeSlot = document.getElementById("timeSlot-opt");
        	var timeOptLength = clearTimeSlot.options.length;
        	
                        for (i = timeOptLength-1; i > 0; i--) {
                          clearTimeSlot.options[i] = null;
                        }
        	
        	var selectedDestination = document.querySelector('#destination-opt').value;
        	
        	
        	 for(var i=0; i<destinations.length; i++){
        		
        		
        		if((destinations[i].destination) == selectedDestination){
        			
        			for(var j=0; j<destinations[i].dropPoints.length; j++){
        				
        				//Binding options of DropPoint
        				
        				var dropPointOption = document.createElement("option");
        				
        				dropPointOption.innerHTML = destinations[i].dropPoints[j].dropPoint;
        				
        				document.getElementById("dropPoint-opt").options.add(dropPointOption);
        				
        				
        			}
        			
        			for(var k=0; k<destinations[i].timeSlots.length; k++){
        				
        				//Binding options of TimeSlots
        				
        				var timeSlotOption = document.createElement("option");
        				
        				timeSlotOption.innerHTML = destinations[i].timeSlots[k].timeSlot;
        				
        				document.getElementById("timeSlot-opt").options.add(timeSlotOption);
        			}
        		}
        	} 
        	
        	
        });
        
      //End of Populating DropPoints and TimeSlots
      
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            /* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        
      //Validate for Empty Fields	
        
        function checkEmptyFields(){
        	
        	
        	
        	if(document.getElementById("destination-opt").selectedIndex == 0){
        		alert("Select Destination");
        		return false;
        	}
        	
        	if(document.getElementById("timeSlot-opt").selectedIndex == 0){
        		alert("Select TimeSlot");
        		return false;
        	}
        	
        	if(document.getElementById("dropPoint-opt").selectedIndex == 0){
        		alert("Select DropPoint");
        		return false;
        	}
        	
        	saveIconClicked();
        }
      
      //Validate for Empty Fields - Ends
      
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        //Posting Booking request using AJAX call
      
	  var xhrsaving = new XMLHttpRequest();
      
      function saveIconClicked(){
    	  
    	  
    	  
    	  var request = {"destination":destinationSelected,"dropPoint":dropPointSelected,"timeSlot":timeSlotSelected};
    	  
    	  xhrsaving.open("POST","http://localhost:6062/api/v1//managingRoute/post",true);
    	  xhrsaving.onreadystatechange=savingResponse;
    	  
    	  xhrsaving.setRequestHeader("Content-Type", "application/json");
    	  
    	  xhrsaving.send(JSON.stringify(request));
      }
      
      var savededResponseObj;
      
      function savingResponse(){
  		
  		if(xhrsaving.readyState == 4 && xhrsaving.status == 200)
  		    {
  			validationResponse = JSON.parse(xhrsaving.responseText);
  	           //alert(bookingResponseObj.bookingId);
  	           document.getElementById("screen-title").innerHTML = "Route Info";
  	          
  	      	   
      	       document.querySelector('#destination-opt').disabled = true;
      	       document.querySelector('#dropPoint-opt').disabled = true;
      	       document.querySelector('#timeSlot-opt').disabled = true;
  		    }
  	}
  	 
  /*--------------------------------------------Displaying dynamic table -------------------------------------------------------*/


var xhrDest = new XMLHttpRequest();
document.getElementById("destination-opt").addEventListener('click',function(){
 event.preventDefault();
  xhrDest.open("GET","http://localhost:6062/api/v1/managingRoute",true);
         
            xhrDest.onreadystatechange=destinationProcessResponse;
            xhrDest.send(null);
    
 });
 function destinationProcessResponse(){
        	if(xhrDest.readyState == 4 && xhrDest.status == 200){
	           
	           
	           
	           var destinationList= document.getElementById("destination-opt");
                var length = destinationList.options.length;
            
              for (i = length-1; i > 0; i--) {
                   destinationList.options[i] = null;
              }

        		destinations = JSON.parse(xhrDest.responseText);

                for(var i=0; i<destinations.length; i++){

        			var opt = document.createElement("option");
        			

                    opt.innerHTML = destinations[i].destination;

                    document.getElementById("destination-opt").options.add(opt);

                 }

              }
        }

        
        //For Populating DropPoints and TimeSlots based on Destination

        document.getElementById("destination-opt").addEventListener('change',function(){
        	
        	//Clearing the options of DropPoint drop down
        	
        	var clearDropPoint = document.getElementById("dropPoint-opt");
        	var dropOptLength = clearDropPoint.options.length;
        	
                        for (i = dropOptLength-1; i > 0; i--) {
                          clearDropPoint.options[i] = null;
                        }
                        
        	//Clearing the options of TimeSlot drop down
            
            var clearTimeSlot = document.getElementById("timeSlot-opt");
        	var timeOptLength = clearTimeSlot.options.length;
        	
                        for (i = timeOptLength-1; i > 0; i--) {
                          clearTimeSlot.options[i] = null;
                        }
        	
        	var selectedDestination = document.querySelector('#destination-opt').value;
        	
        	
        	 for(var i=0; i<destinations.length; i++){
        		
        		
        		if((destinations[i].destination) == selectedDestination){
        			
        			for(var j=0; j<destinations[i].dropPoints.length; j++){
        				
        				//Binding options of DropPoint
        				
        				var dropPointOption = document.createElement("option");
        				
        				dropPointOption.innerHTML = destinations[i].dropPoints[j].dropPoint;
        				
        				document.getElementById("dropPoint-opt").options.add(dropPointOption);
        				
        				
        			}
        			
        			for(var k=0; k<destinations[i].timeSlots.length; k++){
        				
        				//Binding options of TimeSlots
        				
        				var timeSlotOption = document.createElement("option");
        				
        				
        				  var slot = destinations[i].timeSlots[k].timeSlot;
        				  var slotSplitted =slot.split(":");
        				  slotHour = slotSplitted[0];
        				  if (slotHour < 12){
								if(slotHour == 00){
									timeSlotOption.innerHTML = "12" + ":" + slotSplitted[1] + "AM";
									
								}else{
									timeSlotOption.innerHTML =slotHour + ":" + slotSplitted[1] + "AM";
									
								}
					}else{
						slotHour = slotHour -12;
						if(slotHour < 10){
							timeSlotOption.innerHTML = "0" + slotHour +":" +slotSplitted[1] + "PM";
							
						}else{
							timeSlotOption.innerHTML =slotHour + ":" +slotSplitted[1] + "PM";
 						}
						
	
}
        				
        				
        				
        				document.getElementById("timeSlot-opt").options.add(timeSlotOption);
        				
        				
        				
        				
        				
        			}
        		}
        	} 
        	
        	
        });
        
        
       
        


 document.getElementById("pills-tabContent").addEventListener('click',function(){
 event.preventDefault();
  xhrRouteDetails.open("GET","http://localhost:6062/api/v1/managingRoute",true);
         
            xhrRouteDetails.onreadystatechange=routeProcessResponse;
            xhrRouteDetails.send(null);
    
 });
 
    function routeProcessResponse(){
  if(xhrRouteDetails.readyState == 4 && xhrRouteDetails.status == 200)
            {
	
	
             $("#route-info").empty();
             var arr = JSON.parse(xhrRouteDetails.responseText);
           
             var rowCounter = 0;
             
       for(var i=0;i<arr.length; i++){

 

       // creating row and data  
        
        var trow=document.createElement('tr');
        trow.className="row-bg-style";             // display-shadow       // addingStyle class
        trow.id = "tr" + rowCounter++;
        
        
        
        var divObj = document.createElement('td');
        divObj.className="spacing1";
        divObj.id = "tddestination" + i;
        
        var divObj1 = document.createElement('td');
        var divObj1=document.createElement('output');
        divObj1.className="spacing1";
        divObj1.id = "tddropPoints" + i;
         
        
        var divObj2 = document.createElement('td');
        divObj2.className="spacing1";
        divObj2.id = "tdtimeSlots" + i;
        
          var divObj3 = document.createElement('td');
        divObj3.className="spacing1 text-center";
        divObj3.id = "tdsavecancel" + i;
        
       
         divObj.innerText = arr[i].destination;
          divObj1.innerText = arr[i].dropPoint;
            
        divObj2.innerText = arr[i].time;
        divObj3.innerHTML="<a href='routeNext.html' title='Edit' class='actions-image'><img src='images/edit.svg' alt='edit-icon'/></a><a href='#' title='Delete' class='actions2-image'><img src='images/delete.svg' alt='delete-icon'/></a>"
        
        
        
        trow.appendChild(divObj);
        trow.appendChild(divObj1);
        trow.appendChild(divObj2);
        trow.appendChild(divObj3);
     
       
     
        document.getElementById("route-info").appendChild(trow);
  
  	}
  }
  /*---------------------- destination list-------------------------
  
var destList ;
document.getElementById("pills-tabContent").addEventListener('click',function(){
 event.preventDefault();
  destList.open("GET","http://localhost:6062/api/v1//managigRoute/all/destName",true);
         
            destList.onreadystatechange=destProcessResponse;
            destList.send(null);
    
 });
 
 
    
    function destProcessResponse(){
            if(destList.readyState == 4 && destList.status == 200){ 
 
        
  			
  			 destinations = JSON.parse(xhrDest.responseText);

 

                for(var i=0; i<destinations.length; i++){

 

                    var opt = document.createElement("option");
                    

 

                    opt.innerHTML = destinations[i].destination;

 

                    document.getElementById("destination-dropdown").options.add(opt);
*/
 

                 
        
			
}




  
  
  
 
 

  
  
 
  
  
  
  
  
 
  
  
       
         
         
 		
       

  




var ddloption;
	var id=1;
function display(){
	

	
	var o=document.getElementById("dis");
	  var addDropPoint= document.getElementById("dropPoint").value;
	  
	  
	div=document.createElement("tr");
	div.setAttribute("id", "row"+(id)); 
	
	b=document.createElement("td");
	
	inpt=document.createElement("INPUT");
	inpt.style="margin-right:5%";
	 inpt.setAttribute("type", "text");
	 
	 inpt.setAttribute("id", "t1"+(id));
	
	 inpt.value=addDropPoint;
	 inpt.disabled=true;
	 b.appendChild(inpt);
//	b.setAttribute("id", "t1"+(i)); 
//    b.innerHTML="<input type='text' style='margin-right:15%;' id='box1' value="+addDropPoint+" disabled=true>";
    document.getElementById("dropPoint").value="";
    
    if( addDropPoint == ""){
		alert("Drop Point cannot be empty");
		return false;
	}

	dynList = o.querySelectorAll('input[type="text"]')
//ddloption =  document.getElementById("t1").value;
	
	for(var i = 0; i < dynList.length; i++)
	{  
		if(addDropPoint == dynList[i].value){
			alert(false);
			return false;
		} 
	}    



    
    
	 c=document.createElement("td");
	 c.innerHTML="<img src='images/cancel.svg' alt='cancel-icon' style='margin-right:7%' style='margin-bottom:4%' onclick='cancelOf(this)'/>"
	 c.style="padding-right:35%";
	  c.setAttribute("id", "cancel"+(i));
	  
	
	 div.appendChild(b);
	 div.appendChild(c);
	 o.appendChild(div);
	 
	id++;
	
}

function cancelOf(id){
	var cancel=(id.closest("tr").id);
	
	//var cncl=cancel.replace("cancel","");
	
	document.getElementById(cancel).parentNode.removeChild(document.getElementById(cancel));
	
	
}


var timeid=1;
function display1(){

	var o=document.getElementById("dis1");
	  var addTimeSlot= document.getElementById("timeSlot").value;
	  
	
	div=document.createElement("tr");
	div.setAttribute("id", "timerow"+(timeid)); 
	
	b=document.createElement("td");
	
	inpt=document.createElement("INPUT");
	inpt.style="margin-right:5%";
	 inpt.setAttribute("type", "text");
	 
	 inpt.setAttribute("id", "t1"+(timeid));
	

	
	//b.setAttribute("id", "t1"+(i)); 
//    b.innerHTML="<input type='text' style='margin-right:5%; ' id='dyn1'  disabled=true>";
    //document.getElementById("timeSlot").value="";
    
    var time;
     var slotSplitted = addTimeSlot.split(":");
        				  slotHour = slotSplitted[0];
        				  if (slotHour < 12){
								if(slotHour == 00){
									time = "12" + ":" + slotSplitted[1] + " AM";
									
								}
								else{
									time =slotHour + ":" + slotSplitted[1] + " AM";
									
								}
					}else{
						slotHour = slotHour -12;
						if(slotHour==0){
							time= "12"+":" +slotSplitted[1] + " PM";
						}
						else if(slotHour < 10){
							time= "0" + slotHour +":" +slotSplitted[1] + " PM";
							
						}else{
							time=slotHour + ":" +slotSplitted[1] + " PM";
 						}
 						
 				}	
   
   document.getElementById("timeSlot").value="";
   	 inpt.value=time;
	 inpt.disabled=true;
	 b.appendChild(inpt);
   
    if( addTimeSlot == "")
{
alert("Time slot cannot be empty");
return false;
}
dynList = o.querySelectorAll('input[type="text"]')
//ddloption =  document.getElementById("t1").value;
	
	for(var i = 0; i < dynList.length; i++)
	{  
		if(time == dynList[i].value){
			alert(false);
			return false;
		} 
	}  
    
    
	 c=document.createElement("td");
	 c.innerHTML="<img src='images/cancel.svg' alt='cancel-icon' style='margin-right:3%' style='margin-bottom:4%' onclick='cancelOfTime(this)'/>"
	 c.style="padding-right:35%";
	  c.setAttribute("id", "cancel"+(timeid));
	  
	
	 div.appendChild(b);
	 div.appendChild(c);
	 o.appendChild(div);
	 
	timeid++;
	
}

function cancelOfTime(id){
	var cancel=(id.closest("tr").id);
	
	//var cncl=cancel.replace("cancel","");
	
	document.getElementById(cancel).parentNode.removeChild(document.getElementById(cancel));
	
	
}





var xhrSaveRouteDetails = new XMLHttpRequest();

document.getElementById("saveBtn").addEventListener('click' , validateRouteDetails);
  


 function validateRouteDetails(){
 
 				
 				if(document.getElementById('destination').value == undefined || document.getElementById('destination').value =="")
                {
                    alert("Destination cannot be Empty");
                    return false;
                }
                var point=document.getElementById("dis");
                if(dis.querySelectorAll('input[type="text"]').length==0)
                {
                    alert("Drop Points cannot be Empty");
                    return false;
                }
                
                
                var slot=document.getElementById("dis1");
                if(dis1.querySelectorAll('input[type="text"]').length==0)
                {
                    alert("Time Slot  cannot be Empty");
                    return false;
                }
                
                saveRouteDetails();
 
  }
  
  
  
  var savingNewRecord = true; 
  
  function saveRouteDetails(){
  
  var destination=document.getElementById("destination").value;
  
    
  
  
   var dropPoint =new Array();
   var point=document.getElementById("dis");
  var dropList= point.querySelectorAll('input[type="text"]');
   
   
   
  
  for(var i = 0; i < dropList.length; i++)
	{    
	
		var eachDropPoint = {"dropPoint":dropList[i].value}
	
		dropPoint.push(eachDropPoint);
	      
	           
	        
	}   



//

 var timeSlot =new Array();
   var slot=document.getElementById("dis1");
  var slotList= slot.querySelectorAll('input[type="text"]');
   
   
   
  
  for(var i = 0; i < slotList.length; i++)
	{    
	
	var splittedTimeSlot = slotList[i].value.split(":");
	var mins;
	
	if(parseInt(splittedTimeSlot[1]) < 10) {
		mins = "0" + parseInt(splittedTimeSlot[1]);
	} else {
		mins = parseInt(splittedTimeSlot[1]);
	}
	
	  if (splittedTimeSlot[1].includes("PM")) {
		  //alert(Number(splittedTimeSlot[1])); 
		  if (parseInt(splittedTimeSlot[0],10 ) + 12 == 24) {
			  bookingTimeSlot = parseInt(splittedTimeSlot[0],10 ) + ":" + mins;
		  }
		  
		  else {
			  splittedTimeSlotHour = parseInt(splittedTimeSlot[0],10) + 12;
			  bookingTimeSlot = splittedTimeSlotHour + ":" + mins;
		  }
	  }
	  else {
		  if (parseInt(splittedTimeSlot[0],10) < 10) {
			  bookingTimeSlot = "0" + parseInt(splittedTimeSlot[0],10) + ":" + mins;
		  }
		  else if(parseInt(splittedTimeSlot[0],10)==12){
				bookingTimeSlot = "00" + ":" + mins;
			}
		  else {
			  bookingTimeSlot = parseInt(splittedTimeSlot[0],10) + ":" + mins;
		  }
	  }
		
		var eachTimeSlot = {"timeSlot":bookingTimeSlot};
		
		timeSlot.push(eachTimeSlot);
	      
	           
	        
	}   
  
	var data = {"destination":destination,"dropPoints":dropPoint,"timeSlots":timeSlot};
	
	if(savingNewRecord) {
   
	    xhrSaveRouteDetails.open("POST","http://localhost:6062/api/v1/managingRoute/newRoute",true);
	    xhrSaveRouteDetails.setRequestHeader("Content-Type","application/json");
	 	xhrSaveRouteDetails.send(JSON.stringify(data));
	  
	    xhrSaveRouteDetails.onreadystatechange=saveRouteInfoProcessResponse; 
	     
    } else {
		 xhrSaveRouteDetails.open("PUT","http://localhost:6062/api/v1/updateRouteInfo/"+destination,true);
	    xhrSaveRouteDetails.setRequestHeader("Content-Type","application/json");
	 	xhrSaveRouteDetails.send(JSON.stringify(data));
	  
	    xhrSaveRouteDetails.onreadystatechange=saveRouteInfoProcessResponse; 
	    
	}
}
   
 function saveRouteInfoProcessResponse()
 {
 
 //created
 
 if (xhrSaveRouteDetails.readyState == 4 &&  xhrSaveRouteDetails.status == 201) {
   
     var response = this.responseText;
    
     alert("Route Details saved successfully");
      window.location.href="/routeDetails.html";
     
     funclear();
   }
    if(xhrSaveRouteDetails.readyState == 4 &&  xhrSaveRouteDetails.status == 201){
	
	window.location.href="/routeDetails.html";
}
   
   if(xhrSaveRouteDetails.readyState == 4 &&  xhrSaveRouteDetails.status == 200){
	
	window.location.href="/routeDetails.html";
}
   
   
   //NOT_ACCEPTABLE
   
   if(xhrSaveRouteDetails.readyState == 4 &&  xhrSaveRouteDetails.status == 208){
 
   alert("Destination already exist");
   } 
   
   
   
 }


/* -----------------------------------------------------------------------------------------------------------------------*/


									//Cancel button -> clear the data which was entered by the admin


function funclear()
            {
            	savingNewRecord = true;
                document.getElementById("destination").value="";
                
                document.getElementById("dropPoint").value="";
                
                document.getElementById("timeSlot").value="";
                
                location.reload();
            }


    
    
 

  
  

  
  
var destination;

window.onload = function() {
	var editDatas = window.location.search;
	if(editDatas == null || editDatas == undefined || editDatas== "") {
		return false;
	}
	else{
	savingNewRecord=false;
	 destination = editDatas.split("=")[1];
	var des =document.getElementById("destination");
	des.value = destination;
	des.disabled =true;
	editRouteDetails();
	}
	}
	
	var xhrDestinationDetails = new XMLHttpRequest();
 
  function editRouteDetails(){
  
 
  
    xhrDestinationDetails.open("GET","http://localhost:6062/api/v1/editRoute/"+destination,true);
 	
 	
 	xhrDestinationDetails.setRequestHeader("Content-Type","application/json");
 	xhrDestinationDetails.send(null);
  
    xhrDestinationDetails.onreadystatechange=dsetinationProcessResponse;  
 
 }
 function dsetinationProcessResponse(){
	if(xhrDestinationDetails.status==200 && xhrDestinationDetails.readyState==4){
		var route=JSON.parse(this.responseText);
		for(var i=0;i<route.dropPoints.length;i++){
			
			var o=document.getElementById("dis");
			div=document.createElement("tr");
	div.setAttribute("id", "row"+i); 
	
	b=document.createElement("td");
	
	inpt=document.createElement("INPUT");
	inpt.style="margin-right:5%";
	 inpt.setAttribute("type", "text");
	 
	 inpt.setAttribute("id", "t1"+i);
	
	 inpt.value=route.dropPoints[i].dropPoint;
	 inpt.disabled=true;
	 b.appendChild(inpt);
//	b.setAttribute("id", "t1"+(i)); 
//    b.innerHTML="<input type='text' style='margin-right:15%;' id='box1' value="+addDropPoint+" disabled=true>";
   // document.getElementById("dropPoint").value="";
    
   



    
    
	 c=document.createElement("td");
	 c.innerHTML="<img src='images/cancel.svg' alt='cancel-icon' style='margin-right:7%' style='margin-bottom:4%' onclick='cancelOf(this)'/>"
	 c.style="padding-right:35%";
	  c.setAttribute("id", "cancel"+(i));
	  
	
	 div.appendChild(b);
	 div.appendChild(c);
	 o.appendChild(div);
	 
	
	
}
   for(var j=0;j<route.timeSlots.length;j++){
		var o=document.getElementById("dis1");
	  var addTimeSlot= document.getElementById("timeSlot").value;
	  
	
	div=document.createElement("tr");
	div.setAttribute("id", "timerow"+(j)); 
	
	b=document.createElement("td");
	
	inpt=document.createElement("INPUT");
	inpt.style="margin-right:5%";
	 inpt.setAttribute("type", "text");
	 
	 inpt.setAttribute("id", "t1"+(j));
	

	
	//b.setAttribute("id", "t1"+(i)); 
//    b.innerHTML="<input type='text' style='margin-right:5%; ' id='dyn1'  disabled=true>";
    //document.getElementById("timeSlot").value="";
    
    var time;
     var slotSplitted = route.timeSlots[j].timeSlot.split(":");
        				  slotHour = slotSplitted[0];
        				  if (slotHour < 12){
								if(slotHour == 00){
									time = "12" + ":" + slotSplitted[1] + " AM";
									
								}
								else{
									time =slotHour + ":" + slotSplitted[1] + " AM";
									
								}
					}else{
						slotHour = slotHour -12;
						if(slotHour==0){
							time= "12"+":" +slotSplitted[1] + " PM";
						}
						else if(slotHour < 10){
							time= "0" + slotHour +":" +slotSplitted[1] + " PM";
							
						}
						
						else{
							time=slotHour + ":" +slotSplitted[1] + " PM";
 						}
 						
 				}	
   
  // document.getElementById("timeSlot").value="";
   	 inpt.value=time;
	 inpt.disabled=true;
	 b.appendChild(inpt);
   
   
dynList = o.querySelectorAll('input[type="text"]')
//ddloption =  document.getElementById("t1").value;
	
	for(var i = 0; i < dynList.length; i++)
	{  
		if(time == dynList[i].value){
			alert(false);
			return false;
		} 
	}  
    
    
	 c=document.createElement("td");
	 c.innerHTML="<img src='images/cancel.svg' alt='cancel-icon' style='margin-right:3%' style='margin-bottom:4%' onclick='cancelOfTime(this)'/>"
	 c.style="padding-right:35%";
	  c.setAttribute("id", "cancel"+(j));
	  
	
	 div.appendChild(b);
	 div.appendChild(c);
	 o.appendChild(div);
	 
	
	
}
	}
			
			
			
			
			
			
		}
		
		
		
	
	
	
	

	
	




var i=0;
var ddloption;
function display(){
	var o=document.getElementById("dis");
	  var addDropPoint= document.getElementById("dropPoint").value;
	  
	  
	div=document.createElement("tr");
	div.setAttribute("id", "row"+(i++)); 
	
	b=document.createElement("td");
	/*
	inpt=document.createElement("INPUT");
	inpt.style="margin-right:5%";
	 inpt.setAttribute("type", "text");
	 
	 inpt.setAttribute("id", "t1"+(i++));
	
	 inpt.value=addDropPoint;
	 inpt.disabled=true;
	 */
	b.setAttribute("id", "t1"+(i)); 
    b.innerHTML="<input type='text' style='margin-right:15%;' id='box1' value="+addDropPoint+" disabled=true>";
    document.getElementById("dropPoint").value="";
    
    if( addDropPoint == "")
{
alert("Drop Point cannot be empty");
return false;
}


//ddloption =  document.getElementById("t1").value;
	
	for(var i = 0; i < b.length; i++)
	{    if( b[i].value == addDropPoint)
	    {   
	        alert("Drop Point already exist ");
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
	 
	
	
}

function cancelOf(id){
	var cancel=(id.closest("tr").id);
	
	//var cncl=cancel.replace("cancel","");
	
	document.getElementById(cancel).parentNode.removeChild(document.getElementById(cancel));
	
	
}

var i=0;
function display1(){
	var o=document.getElementById("dis1");
	  var addTimeSlot= document.getElementById("timeSlot").value;
	  
	div=document.createElement("tr");
	div.setAttribute("id", "row"+(i++)); 
	
	b=document.createElement("td");
	
	b.setAttribute("id", "t1"+(i)); 
    b.innerHTML="<input type='text' style='margin-right:5%; '  value="+addTimeSlot+" disabled=true>";
    document.getElementById("timeSlot").value="";
    
    
     var slotSplitted = addTimeSlot.split(":");
        				  slotHour = slotSplitted[0];
        				  if (slotHour < 12){
								if(slotHour == 00){
									addTimeSlot.innerText = "12" + ":" + slotSplitted[1] + "AM";
									
								}
								else{
									addTimeSlot.innerText =slotHour + ":" + slotSplitted[1] + "AM";
									
								}
					}else{
						slotHour = slotHour -12;
						if(slotHour < 10){
							addTimeSlot.innerText = "0" + slotHour +":" +slotSplitted[1] + "PM";
							
						}else{
							addTimeSlot.innerText =slotHour + ":" +slotSplitted[1] + "PM";
 						}
 						
 				}	
   
   
   
   
    if( addTimeSlot == "")
{
alert("Time slot cannot be empty");
return false;
}
    
    
	 c=document.createElement("td");
	 c.innerHTML="<img src='images/cancel.svg' alt='cancel-icon' style='margin-right:3%' style='margin-bottom:4%' onclick='cancelOfTime(this)'/>"
	 c.style="padding-right:35%";
	  c.setAttribute("id", "cancel"+(i));
	  
	
	 div.appendChild(b);
	 div.appendChild(c);
	 o.appendChild(div);
	 
	
	
}

function cancelOfTime(id){
	var cancel=(id.closest("tr").id);
	
	//var cncl=cancel.replace("cancel","");
	
	document.getElementById(cancel).parentNode.removeChild(document.getElementById(cancel));
	
	
}





var xhrSaveRouteDetails = new XMLHttpRequest();



 function validateRouteDetails(){
 
 				
 				if(document.getElementById('destination').value == undefined || document.getElementById('destination').value =="")
                {
                    alert("Destination cannot be Empty");
                    return false;
                }
                if(document.getElementById('dropPoint').value == undefined || document.getElementById('dropPoint').value =="")
                {
                    alert("Drop Points cannot be Empty");
                    return false;
                }
                if(document.getElementById('timeSlot').value == undefined || document.getElementById('timeSlot').value =="")
                {
                    alert("Time Slot  cannot be Empty");
                    return false;
                }
                
                saveRouteDetails();
 
  }
  
  
  
  document.getElementById("saveBtn").addEventListener('click' , function(){
	saveRouteDetails();
});
  
  
  
  function saveRouteDetails(){
  
  var destination=document.getElementById("destination").value;
    
  
  
   var dropPoint=document.getElementById("box1").value;
  
  for(var i = 0; i <= dropPoint.length; i++)
	{    
	
	
	
		 var res=box[i].value ;
		 alert(res);
		 
		 
	      
	           
	        
	}    


  
  
 
  var timeSlot=document.getElementById("timeSlot").value;
 
  
  if(savingNewRecord)
  {
	var data = {"destination":destination,"dropPoints":dropPoint,"timeSlots":timeSlot};
	
	
   
    xhrSaveRouteDetails.open("POST","http://localhost:6062/api/v1/managingRoute/post",true);
    }
 
 	xhrSaveRouteDetails.setRequestHeader("Content-Type","application/json");
 	xhrSaveRouteDetails.send(JSON.stringify(data));
  
   if(savingNewRecord)
    xhrSaveRouteDetails.onreadystatechange=saveRouteInfoProcessResponse;  
   
 }
 
 function saveRouteInfoProcessResponse()
 {
 
 //created
 
 if (xhrSaveRouteDetails.readyState == 4 &&  xhrSaveRouteDetails.status == 201) {
   
     var response = this.responseText;
     alert("Route Details saved successfully");
     funclear();
   }
   
   //NOT_ACCEPTABLE
   
   if(xhrSaveRouteDetails.readyState == 4 &&  xhrSaveRouteDetails.status == 406){
   alert("Destination already exist");
   } 
   
   
   location.reload();
   
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


    
    
/* --------------------------------------------------------------------------------------------------------*/

  
  var xhrRouteDetails = new XMLHttpRequest();
 var delRoute;

var delId;
 var delrow;
  function deleteCabDetails(){
  
 
  
    xhrRouteDetails.open("PUT","http://localhost:6062/api/v1/managingRoute/delete/{destId}"+delCab,true);
 	
 	
 	xhrRouteDetails.setRequestHeader("Content-Type","application/json");
 	xhrRouteDetails.send(null);
  
    xhrRouteDetails.onreadystatechange=deleteRouteInfoProcessResponse;  
 
 }
 
 function deleteRouteInfoProcessResponse()
 {
 if (xhrRouteCabDetails.readyState == 4 &&  xhrDeleteCabDetails.status == 200) {
   
     var response = this.responseText;
     //alert(delrow);
     delrow.remove(); //tr0
     alert("Route  Details deleted successfully");
   }
   location.reload();
 }

function deleteData(row){
	delId = row.closest("td").id;
	//alert(delId); tdeditdelete0
	var counter=delId.replace("tdeditdelete","");
	//alert(counter);
              delrow =document.getElementById("tr"+counter);  //tr0
              
                delRoute = delrow.getElementsByTagName("td")[1].innerHTML;
              //  alert(delRoute);
                
                
}


/*
var editId;
var editRow;
var driverId;
function editData(row){
    savingNewRecord = false;
	

	editId = row.closest("td").id;
	//alert(editId);
	var counterEdit=editId.replace("tdeditdelete","");
	editRow =document.getElementById("tr"+counterEdit);
	
	var model = editRow.getElementsByTagName("td")[0].innerHTML;
	var numberCab = editRow.getElementsByTagName("td")[1].innerHTML;
	var seatsAvailable = editRow.getElementsByTagName("td")[2].innerHTML;
	var ins = editRow.getElementsByTagName("td")[3].innerHTML;
	var exp = editRow.getElementsByTagName("td")[4].innerHTML;
	var driver = editRow.getElementsByTagName("td")[5].innerHTML;
	driverId = editRow.getElementsByTagName("td")[7].innerHTML;
	
	document.getElementById("cab-Model-Dropdown").value = model;
	document.getElementById("cab-num").value = numberCab;
	document.getElementById("cab-num").disabled = "true";
	document.getElementById("no-seats").value = seatsAvailable;
	document.getElementById("insurance-num").value = ins;
	document.getElementById("ins-exp-date").value = formatDate(exp,1);   //does not required format yyyy/mm/dd
	document.getElementById("driv-name").value = driver;

}
 
 
 
  
 // var xhrUpdate = new XMLHttpRequest();

 
 function updateRouteInfoProcessResponse()
 {
 
 // ACCEPTED
 
 if (xhrSaveRouteDetails.readyState == 4 &&  xhrSaveRouteDetails.status == 202) {
   
     var response = this.responseText;
     
	
    alert("Route Details updated successfully");    
    funclear();
   }
   
  
   location.reload();
  
}


/* ---------------------------------------------------------------------------------------------------------------------------------------*/


// date formate change

function formatDate(date, option){
	var arr = date.split("-");
	
	if(option ==1)
     var formatedDate = arr[2] + "-" + arr[1] + "-" + arr[0];
     else if(option==2) //dd-mm-yyyy
     var formatedDate = arr[1] + "-" + arr[0] + "-" + arr[2];
  return formatedDate;
	
}


/* -------------------------------------------------------------------------------------------------------------------

var saveDestination=new XMLHttpRequest();
var saveURL="http://localhost:6062/api/v1/managingRoute/post";
function validation(){
	document.getElementById("saveBtn").addEventListener('click' , function(){
   var destination=document.getElementById("destination").value;
	var dropPoint=document.getElementById("dropPoint").value;
	var timeSlot=document.getElementById("timeSlot").value;
	
	var data={"destination":destination,"dropPoint":dropPoint,"timeSlot":timeSlot};
	
	
	saveDestination.open("POST",saveURL,true);

    saveDestination.setRequestHeader("Content-Type","application/json");
   saveDestination.send(JSON.stringify(data));
   saveDestination.onreadystatechange = processResponseSave;

});
  
}
/*
var saveURL="http://localhost:6062/api/v1/managingRoute/post";
function saveNewDestination(){
	var destination=document.getElementById("destination").value;
	var dropPoint=document.getElementById("dropPoint").value;
	var timeSlot=document.getElementById("timeSlot").value;
	
	var data={"destination":destination,"dropPoint":dropPoint,"timeSlot":timeSlot};
	
	
	saveDestination.open("POST",saveURL,true);

    saveDestination.setRequestHeader("Content-Type","application/json");
   saveDestination.send(JSON.stringify(data));
   saveDestination.onreadystatechange = processResponseSave;

	


function processResponseSave(){
	if (saveDestination.readyState==4 && saveDestination.status==200){
		var response=this.responsetext;
		alert("saved");
		clear();
		window.location.reload();
		
	}
	
	
	
}

function clear(){
	document.getElementById("destination").value="";
	document.getElementById("dropPoint").value="";
	document.getElementById("timeSlot").value="";
	
	
}

*/

  
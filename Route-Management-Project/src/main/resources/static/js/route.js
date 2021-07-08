

/*----------------------Dynamic table-------------------------------------------------------------------------------*/


var xhrRouteDetails = new XMLHttpRequest();
var destinations;
document.getElementById("pills-tabContent").addEventListener('click', function() {
	event.preventDefault();
	xhrRouteDetails.open("GET", "http://localhost:6062/api/v1/managingRoute", true);

	xhrRouteDetails.onreadystatechange = routeProcessResponse;
	xhrRouteDetails.send(null);

});

function routeProcessResponse() {
	if (xhrRouteDetails.readyState == 4 && xhrRouteDetails.status == 200) {


		$("#route-info").empty();
		var arr = JSON.parse(xhrRouteDetails.responseText);

		var rowCounter = 0;
		//var len = arr.dropPoints.length;

		for (var i = 0; i < arr.length; i++) {


			// creating row and data  

			var trow = document.createElement('tr');
			// display-shadow       // addingStyle class
			trow.id = "tr" + rowCounter++;



			var divObj = document.createElement('td');
			divObj.id = "tddestination" + i;
			var divObj1 = document.createElement('td');
			divObj1.id = "tddropPoints" + i;
 var list=document.createElement('ul');
			for(j = 0; j < arr[i].dropPoints.length; j++){
							//alert("hi");
			
			var listItem=document.createElement('li');
			listItem.innerText=arr[i].dropPoints[j].dropPoint;
			list.appendChild(listItem);
			

				
			}
			divObj1.appendChild(list);
			

			


		var divObj2 = document.createElement('td');
			divObj2.id = "tdtimeSlots" + i;

	
 						 var list1=document.createElement('ul');
			for(k = 0; k < arr[i].timeSlots.length; k++){
							//alert("hi");
			
			var listItem=document.createElement('li');
			
			var slot=arr[i].timeSlots[k].timeSlot;
			
			
			 var slotSplitted =slot.split(":");
        				  slotHour = slotSplitted[0];
        				  if (slotHour < 12){
								if(slotHour == 00){
									listItem.innerHTML = "12" + ":" + slotSplitted[1] + "AM";
									
								}
								else{
									listItem.innerHTML =slotHour + ":" + slotSplitted[1] + "AM";
									
								}
					}else{
						slotHour = slotHour -12;
						if(slotHour < 10){
							listItem.innerHTML = "0" + slotHour +":" +slotSplitted[1] + "PM";
							
						}else{
							listItem.innerHTML =slotHour + ":" +slotSplitted[1] + "PM";
 						}
 						
 				}	
 				
 				
			list1.appendChild(listItem);
			

				
			}
			divObj2.appendChild(list1);
						

			var divObj3 = document.createElement('td');
			divObj3.id = "tdeditdelete" + i;




			divObj.innerText = arr[i].destination;


			

			divObj3.innerHTML = "<a href='routeNext.html' title='Edit' class='actions-image'><img src='images/edit.svg' alt='edit-icon'/></a><a href='#' title='Delete' class='actions2-image'><img src='images/delete.svg' alt='delete-icon'/></a>"



			trow.appendChild(divObj);
			trow.appendChild(divObj1);
			trow.appendChild(divObj2);
			trow.appendChild(divObj3);



			document.getElementById("route-info").appendChild(trow);

		}
	}
}
  	/*----------------------Dynamic table ends-------------------------------------------------------------------------------*/




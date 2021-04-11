function getCases(country,dateOne,dateTwo)
{ 
  
  //FETCHING VALUES FROM THE INPUT BOXES
   var val1=country.value;
   var val2=dateOne.value;
   var val3=dateTwo.value; 
  
    //CREATING THE URL
    var url= `https://api.covid19api.com/country/${val1}?from=${val2}T00:00:00Z&to=${val3}T00:00:00Z`;
    
	
	

 

    //CREATING HTTP REQUEST
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

      var data =this.responseText;
       
        var data1 = JSON.parse(data);
        var show = "";
        
        for(var i =0 ;i<data1.length ;i++){

        show+="<div class='info'><center><p>Confirmed Cases: "+data1[i].Confirmed+"</p><p>Active Cases:"+data1[i].Active +"</p><p> Death Cases : "+data1[i].Deaths+"</p></center></div><br/>"

        }


        var confirm =data1[0].Confirmed;
        var active = data1[0].Active;  
        var deaths =data1[0].Deaths;
         
         document.getElementById("demo").innerHTML = show;        
      }
    };

    xhttp.open("GET", url, true);
    xhttp.send();

  
 
    
    
    
 
}
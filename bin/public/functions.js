var urlPaso1 = "";
var errorCheck = false;

function loadBooks() {
	var urlCompleta="https://books-analyzer.herokuapp.com/" + "books";
	console.log(urlCompleta);
	$.ajax({
	    url: urlCompleta,
	    headers: {"Access-Control-Allow-Origin" : "*"},
	    dataType: 'json',
	    cache: 'false',
	    type: 'GET',
	    success: function(json){
	    	console.log("hola");
	    	console.log(json);
	    	for(var i=0;i<json.length;i++){
	            var obj = arr[i];
	            for(var key in obj){
	                var attrName = key;
	                var attrValue = obj[key];
	                console.log(attrName);
	                console.log(attrValue);
	            }
	        }
	    }
	});
}
function loadAuthors() {
	var urlCompleta="https://books-analyzer.herokuapp.com/" + "authors";
	console.log(urlCompleta);
	$.ajax({
	    url: urlCompleta,
	    headers: {"Access-Control-Allow-Origin" : "*"},
	    dataType: 'json',
	    cache: 'false',
	    type: 'GET',
	    success: function(json){
	    	console.log(json);
	    	for(var i=0;i<json.length;i++){
	            var obj = arr[i];
	            for(var key in obj){
	                var attrName = key;
	                var attrValue = obj[key];
	                console.log(attrName);
	                console.log(attrValue);
	            }
	        }
	    }
	});
}
function searchJSON() {
	if (errorCheck == false){
		var urlCompleta=urlPaso1;
		console.log(urlCompleta);
		$.ajax({
	  		url: urlCompleta,
		    headers: {"Access-Control-Allow-Origin" : "*"},
		    dataType: 'json',
		    cache: 'false',
		    type: 'GET',
		    success: function(json){
		    	console.log("hola");
		    	var status = json.status;
		    	console.log(status);
		    	if (status == null){
		    	$.get(window.location.href + '/loadingTemplate.html', function(template) {
		   			$("#loadingBlock").empty().append(Mustache.to_html(template, json));
		    	});
		      }
		    },
		    complete: function() {
		      // schedule the next request *only* when the current one is complete:
		      setTimeout(searchJSON, 5000);
		    }
  		});
	}
	else{
		setTimeout(searchJSON, 5000);
	}
}


function search() {
	var title= $("#title").val(); 
	var author= $("#author").val();
	var character= $("#character").val();
	var url= $("#url").val();
	var urlCompleta="https://books-analyzer.herokuapp.com/" + "search"+"?title="+title+"&author="+author+"&character="+character/*+"&url="+url*/;
	console.log(urlCompleta);
	//1.- Realizar la primera petición para obtener el ID.
	$.ajax({
	    url: urlCompleta,
	    headers: {"Access-Control-Allow-Origin" : "*"},
	    dataType: 'text',
	    cache: 'false',
	    type: 'GET',
	    success: function(text){ //cambiar por json cuando fred arregle comilla
	    	//console.log("hola");
	    	//obj = JSON.parse(json);
	    	//alert(obj.count);
	    	var cosa = "\{\"url\":\"https:\/\/books-analyzer-ws.herokuapp.com/books/-1707338975\"\}";
	    	//borrar linea de arriba cuando fred arregle comilla
	    	json = JSON.parse(cosa);//quitar esto
		    urlPaso1 = json.url;
		    if (typeof(urlPaso1) == 'undefined' || urlPaso1 == "") {
		    	  errorCheck = true;
		    	  console.log(urlPaso1);
		    	}
		    if (errorCheck == false){
		    	//2.- Función periódica
		    	setTimeout(searchJSON, 5000);
		    	console.log(urlPaso1);
		    	}
		    //urlPaso1="www.prueba.com";
		    //document.cookie = "id="+id;
	    }
	});
	
	
}
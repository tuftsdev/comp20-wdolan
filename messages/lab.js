function parse {
	request = new XMLHTTPRequest();
	request.open("GET", "messages.json", true);
	request.onreadystatechange=parseData;
	request.send();
}

function parseData{
	if(request.readyState == 4){
		messagesDiv = document.getElementById("messages");
		converted = JSON.parse(request.responseText);

		for(i = 0; i < converted.length; i++){
			messagesDiv.innerHTML += "<p> " + converted[i][content];
		}
	}
}
//create XMLHttpRequest object
var xhr = new XMLHttpRequest();

//when readystate changes
xhr.onload = function() {
    responseObject = JSON.parse(xhr.responseText);
    
	//generate new content string
	
    var newContent = '';
	
	//do a loop through our content
	
    for (var i = 0; i < responseObject.pageData.length; i++) {
        newContent += '<div class="TitleXI">';
		newContent += '<h2>' + responseObject.pageData[i].dheader + '</h2>';
        newContent += '<p>' + responseObject.pageData[i].TitleXI + '</p>';
		newContent += '<p>' + responseObject.pageData[i].extended + '</p>';
	        newContent += '<h3>' + responseObject.pageData[i].objheader + '</h3>';
		newContent += '<p>' + responseObject.pageData[i].obj + '</p>';
		newContent += '<h2>' + responseObject.pageData[i].IT + '</h2>';
	        newContent += '<ul>';
		newContent += '<li>' + responseObject.pageData[i].first + '</li>';
		newContent += '<li>' + responseObject.pageData[i].second + '</li>';
		newContent += '<li>' + responseObject.pageData[i].third + '</li>';
		newContent += '<h4>' + responseObject.pageData[i].Policy + '</h4>';
		newContent += '</ul>';
		newContent += '<h4>' + responseObject.pageData[i].AH + '</h4>';
		newContent += '<ul>';
		newContent += '<li><i>' + responseObject.pageData[i].list + '</i></li>';
		newContent += '</ul>';
		newContent += '<b>' + responseObject.pageData[i].ks + '</b>';
		newContent += '<ul>';
		newContent += '<li>' + responseObject.pageData[i].ksone + '</li>';
		newContent += '<li>' + responseObject.pageData[i].kstwo + '</li>';
		newContent += '<li>' + responseObject.pageData[i].ksthree + '</li>';
		newContent += '<li>' + responseObject.pageData[i].ksfour + '</li>';
		newContent += '<ul>';
		newContent += '<li>' + responseObject.pageData[i].indentone + '</li>';
		newContent += '<li>' + responseObject.pageData[i].indenttwo + '</li>';
		newContent += '</ul>';
		newContent += '<li>' + responseObject.pageData[i].ksfive + '</li>';
		newContent += '<ul>';
		newContent += '<li>' + responseObject.pageData[i].indentthree + '</li>';
		newContent += '</ul>';
		newContent += '</ul>';
		newContent += '<b>' + responseObject.pageData[i].devheader + '</b>';
		newContent += '<ul>';
		newContent += '<li>' + responseObject.pageData[i].trone + '</li>';
		newContent += '<li>' + responseObject.pageData[i].trtwo + '</li>';
		newContent += '</ul>';
        newContent += '</div>';
    }
	//update the page with the new content 
	document.getElementById('hermes').innerHTML = newContent;
    
};
 
 //prepare the request
xhr.open('GET', "https://slavk1ng.github.io/Dev-Final/data/final.json", true);
//send the request
xhr.send(null);





//create XMLHttpRequest object
var xhr = new XMLHttpRequest();

//when readystate changes
xhr.onload = function() {
    responseObject = JSON.parse(xhr.responseText);
    
	//create new string for the content
    var newContent = '';
	
	//loop through the content
    for (var i = 0; i < responseObject.pageData.length; i++) {
        newContent += '<div class="desc">';
		newContent += '<h4>' + responseObject.pageData[i].dheader + '</h4>';
        newContent += '<p>' + responseObject.pageData[i].desc + '</p>';
		newContent += '<h4>' + responseObject.pageData[i].objheader + '</h4>';
		newContent += '<p>' + responseObject.pageData[i].obj + '</p>';
		newContent += '<ol>';
		newContent += '<li>' + responseObject.pageData[i].one + '</li>';
		newContent += '<li>' + responseObject.pageData[i].two + '</li>';
		newContent += '<li>' + responseObject.pageData[i].three + '</li>';
		newContent += '<li>' + responseObject.pageData[i].four + '</li>';
		newContent += '<li>' + responseObject.pageData[i].five + '</li>';
		newContent += '</ol>';
		newContent += '<h4>' + responseObject.pageData[i].topheader + '</h4>';
		newContent += '<b>' + responseObject.pageData[i].ll + '</b>';
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
	document.getElementById('pleasework').innerHTML = newContent;
    
};
 
 //prepare the request
xhr.open('GET', "https://thekaysev.github.io/final/data/final.json", true);
//send the request
xhr.send(null);





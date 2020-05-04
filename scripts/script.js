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
		newContent += '<h2>' + responseObject.pageData[i].header1 + '</h2>';
        newContent += '<p>' + responseObject.pageData[i].TitleXI + '</p>';
		newContent += '<p>' + responseObject.pageData[i].extended + '</p>';
		newContent += '<h3>' + responseObject.pageData[i].midheader + '</h3>';
		newContent += '<p>' + responseObject.pageData[i].har + '</p>';
		newContent += '<h2>' + responseObject.pageData[i].IT + '</h2>';
	        newContent += '<ul>';
		newContent += '<li>' + responseObject.pageData[i].first + '</li>';
		newContent += '<li>' + responseObject.pageData[i].second + '</li>';
		newContent += '<li>' + responseObject.pageData[i].third + '</li>';
		newContent += '<u>' + responseObject.pageData[i].Policy + '</u>';
		newContent += '</ul>';
		newContent += '<h4>' + responseObject.pageData[i].AH + '</h4>';
	        newContent += '<p>' + responseObject.pageData[i].AH2 + '</p>';
		newContent += '<p>' + responseObject.pageData[i].AH3 + '</p>';
		newContent += '<u>' + responseObject.pageData[i].INC + '</u>';
		newContent += '<h2>' + responseObject.pageData[i].DIS + '</h2>';
		newContent += '<ul>';
		newContent += '<li>' + responseObject.pageData[i].DIS1 + '</li>';
		newContent += '<li>' + responseObject.pageData[i].DIS2 + '</li>';
                newContent += '<li>' + responseObject.pageData[i].DIS3 + '</li>';
		newContent += '</ul>';
		newContent += '<b>' + responseObject.pageData[i].DIS4 + '</b>';
	        newContent += '<u>' + responseObject.pageData[i].end + '</u>';
        newContent += '</div>';
    }
	//update the page with the new content 
	document.getElementById('hermes').innerHTML = newContent;
    
};
 
 //prepare the request
xhr.open('GET', "https://slavk1ng.github.io/Dev-Final/data/final.json", true);
//send the request
xhr.send(null);

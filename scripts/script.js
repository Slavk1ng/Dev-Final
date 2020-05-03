  
var xhr = new XMLHttpRequest();

xhr.onload = function() {
    responseObject.JSON.parse(xhr.responseText);
    
    var newContent = '';
    for (var i = 0; i < responseObject.pageData.length; i++) {
        newContent += '<div class="desc">';
        newContent += data.pageData[i].desc;
        newContent += '</div>';
    }
    
}
 
xhr.open('GET', "https://github.com/thekaysev/final/blob/master/data/final.JSON", true);
xhr.send(null);


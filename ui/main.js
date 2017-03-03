console.log('Loaded!');
var wall = document.getElementById('mwell');
wall.onclick = function() {
    var interval = setInterval(moveRight,100);
};
var marginLeft = 0;
function moveRight(){
    marginLeft=marginLeft+10;
    wall.style.marginLeft = marginLeft+"px";
    
}

//submit button
var nameInput = document.getElementById('name');

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //make a request a server and send the name 
    var request = new XMLHttpRequest();
    
    //capture a list of names and render it as a list
    request.onreadystatechange = function() {
        if(request.readyState == XMLHttpRequest.DONE) {
            if(request.status == 200) {
                //capture the list of names and render it as a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0;i<names.length;i++) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
                
            }
        }
    };
    //make the request
    var name = nameInput.value;
    request.open('GET', 'http://rushi725.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
  
 
};
console.log('Loaded!');
var wall = document.getElementById('mwell');
wall.onClick = function() {
    var interval = setInterval(moveRight,100);
};
var marginLeft = 0;
function moveRight(){
    marginLeft=marginLeft+10;
    wall.style.marginLeft = marginLeft+"px";
    
}

//submit button
var nameInput = document.getElementById('name');
//var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onClick = function(){
    //make a request a server and send the name 
    //capture a list of names and render it as a list
    var names = ['name1','name2','name3'];
    var list = '';
    for(var i=0;i<names.length;i++){
        list +='<li>' + names[i] +' </li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};
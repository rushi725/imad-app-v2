console.log('Loaded!');
var wall = document.getElementById('mwall');
wall.onClick = function(){
    var interval = setInterval(moveRight,100);
};
var marginLeft = 0;
function moveRight(){
    marginLeft=marginLeft+10;
    wall.style.marginLeft = marginLeft+"px";
    
}
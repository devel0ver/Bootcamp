var add = 9;

function likeButton(){
    add++
    
    var likescount = document.getElementById("count");
    likescount.innerText = add;
    
}

var increase= 12; 
function increaseButton(){
    increase++

    var likescount = document.getElementById("increase");
    likescount.innerText = increase;
}

var grow=9
function changeNum(){
    grow++

    var likescount = document.getElementById("up")
    likescount.innerText = grow;
}

var add = 3;
function likeButton(){
    add++
    
    var likescount = document.getElementById("count");
    likescount.innerText = add;
}

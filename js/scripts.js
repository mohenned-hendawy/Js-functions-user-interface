var myImgs = Array.from( document.getElementsByTagName("img") );
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var Close = document.getElementById("Close");
var imgIndex;




for(var i = 0; i < myImgs.length; i++)
{
    myImgs[i].addEventListener("click", function(e){

        lightBoxContainer.style.display = "flex"; 
        var imgSrc = e.target.getAttribute("src");
        lightBoxItem.style.backgroundImage = `url(${imgSrc})` ;
        imgIndex = myImgs.indexOf(e.target)
    })
}




next.addEventListener("click", function(){
    imgIndex++;
    if(imgIndex == myImgs.length)
    {
        imgIndex = 0;
    }
    lightBoxItem.style.backgroundImage = "url("+myImgs[imgIndex].src+")";
    
})

prev.addEventListener("click", prevSlide);
Close.addEventListener("click", exit);


function prevSlide()
{
    imgIndex--;
    if(imgIndex < 0)
    {
        imgIndex = myImgs.length - 1;
    }    
    lightBoxItem.style.backgroundImage = "url("+myImgs[imgIndex].src+")";
}

function exit()
{
    lightBoxContainer.style.display = "none";
}

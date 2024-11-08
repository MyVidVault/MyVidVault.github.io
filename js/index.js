
document.getElementById("frontpagevideos").focus();

function scrolldown() {
    window.location.href="#bottomofvideos";
    
}



function focusvideobox() {
    document.getElementById("frontpagevideos").focus();
}

function focusdevideo() {
    //document.getElementById("mainvideo").focus();
}

function showwarning() {
    document.getElementById("mainvideo").poster="/sds";
document.getElementById("mainvideo").pause();
}
function hidewarning() {
    document.getElementById("warning").style.padding="0px";
    document.getElementById("warning").style.margin="0px";
    document.getElementById("warning").style.opacity="0";
    document.getElementById("warning").innerHTML="";
    setTimeout(hidewarndone,328);
}
function hidewarndone() {
    document.getElementById("mainvideo").play();
    document.getElementById("warning").style.display="none";
    document.getElementById("mainvideo").style.visibility="visible";
}

 // prevent legals, if someone dold a video anyways, u cant blame me cuz i attempted to prevent it they just haxored it...

 document.oncontextmenu = function(e){
    e.preventDefault();
    document.getElementById("mainvideo").play();
    hidewarning();
}

document.addEventListener("keydown", function (event){



    if(event.keyCode == 123){
  
       //event.preventDefault();
       document.getElementById("mainvideo").play();
       hidewarning();
    }
  
  })


 // prevent legals, if someone dold a video anyways, u cant blame me cuz i attempted to prevent it they just haxored it...

var i,coll=document.getElementsByClassName("modalBtn");for(i=0;i<coll.length;i++)coll[i].addEventListener("click",(function(){modal.style.display="block"}));var modal=document.getElementById("myModal"),btn=document.getElementsByClassName("modalBtn"),span=document.getElementsByClassName("modalclose")[0];btn.onclick=function(){modal.style.display="block"},span.onclick=function(){modal.style.display="none"};
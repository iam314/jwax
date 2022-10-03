// THIS FOR THE FORM REDIRECT
window.addEventListener("DOMContentLoaded", function() {

   // get the form elements defined in your form HTML above

   var form = document.getElementById("contactform");
   var button = document.getElementById("button");
   var status = document.getElementById("status");
   // var status = document.getElementById("thnks");

   // Success and Error functions for after the form is submitted

   function success() {
     status.classList.add('success')
     form.reset();
     formsucces.style = "display: none ";
     thnks.style = "display: block ";
   }

   function error() {
     status.classList.add('error')
     status.innerHTML = "Oops! Something went wrong.";
   }

   // handle the form submission event

   form.addEventListener("submit", function(ev) {
     ev.preventDefault();
     var data = new FormData(form);
     ajax(form.method, form.action, data, success, error);
   });
 });

 // helper function for sending an AJAX request

 function ajax(method, url, data, success, error) {
   var xhr = new XMLHttpRequest();
   xhr.open(method, url);
   xhr.setRequestHeader("Accept", "application/json");
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== XMLHttpRequest.DONE) return;
     if (xhr.status === 200) {
       success(xhr.response, xhr.responseType);
     } else {
       error(xhr.status, xhr.response, xhr.responseType);
     }
   };
   xhr.send(data);
 }

window.addEventListener('DOMContentLoaded', function(){ 
  setTimeout(function(){
    const body = document.body;
    const h2 = document.querySelector('h2');
    body.classList.add('loaded');
    h2.style.color = '#ccc';
    
}, 1000);
});
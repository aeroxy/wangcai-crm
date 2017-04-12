function goBack(){
  window.history.back();
}
function loadContact(){
  window.location = 'contact.html';
}
window.onload = function() {
  var rightbtns = document.querySelectorAll('.right-btn');
  for(var i = 0; i < rightbtns.length; i++) {
    var rightbtn = rightbtns[i];
    rightbtn.onclick = function() {
      loadContact();
    }
  }
}
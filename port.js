var d=0;
function my1(){
    if (d%2 == 0){
        var x = document.querySelector('.left');
      x.className = "left1";
      d++;
    } 
    else {
        var x = document.querySelector('.left1');
      x.className = "left";
      d++;
    }
}
window.addEventListener('load', () =>{
  var q= document.querySelector('.start');
  q.style.display = "none";
  var q= document.querySelector('.end');
  q.style.display = "block";
});
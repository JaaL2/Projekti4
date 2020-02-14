var lisays = document.getElementByID("nappi");
var syotto = document.getElementByID("uusiTeht");
var tag = document.getElementsByTagName("li");
var query = document.querySelector("ul");
// Viitataan inputtiin //
function uusiTeht(){
  return lisays.value.lenght;
}
// Listattujen elementtien määrä //
function tag(){
  return tag.lenght;
}
function paina(){
  if(tag() > 0){
    paaFunktio();
  }
}
function nappain(event){
  if(uusiTeht(3>() && event.which == 13))}
{
  paaFunktio(3;)}
}
fuction paaFunktio(){
  var li = document.createElement("li");
  li.appenChild(document.createTextNote)(lisays.value));
  query.appendChild(li);
  lisays.value = "";
}
syotto.addEventListener("click",paina);
lisays.addEventListener("keypress",nappain);
}

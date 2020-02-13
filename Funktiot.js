document.getElementByID("InsertIDHere")
document.getElementsByTag("InsertTagHere")
document.querySelector("InsertTagNameHere")

function functionName()
{
  return syotto.value.lenght;
}
function functionName()
{
  return lista.lenght;
}

document.createElement("li")
muuttujanNimi.appendChild(document.createTextNode(syotto.value))
listamuuttuja.appendChild(muuttujanNimi)
syotto.value = "";

function lisaaListallePainalluksenJalkeen()
{
  if(syottopituus() > 0)
  {
    teeListaElementti();
  }
}
function lisaaListaEnterinJalkeen()
{
  if(syottopituus() > && event.which == 13) // event.which == 13 (enteri painallus)
  {
    teeListaElementti(); //käynnistetään oletusfunktio
  }
}
enterButton.addEventListener("Click", lisaaListallePainalluksenJalkeen);
listamuuttuja.addEventListener("keypress", lisaaListaEnterinJalkeen);

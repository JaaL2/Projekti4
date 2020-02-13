document.getElementByID("uusi")
document.getElementsByTag("li")
document.querySelector("li")

function tarkastaSyottopituus()
{
  return syotto.value.lenght;
}
function tarkastaListaPituus()
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
enterButton.addEventListener("click", lisaaListallePainalluksenJalkeen);
listamuuttuja.addEventListener("keypress", lisaaListaEnterinJalkeen);

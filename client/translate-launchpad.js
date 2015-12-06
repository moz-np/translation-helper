/**
 * @author  Nootan Ghimire
 * @desc    Uses Google Translate to make translation easier
 *          for launchpad users.
 *
 * @thanks  Mozilla Nepal (for server)
 */

var url = "<your_https_server_url>?string=";

document.onclick = function  (e) {

  var elem, evt = e ? e:event;

  if (evt.srcElement)  elem = evt.srcElement;
  else if (evt.target) elem = evt.target;

  if(elem.nodeName == "INPUT" || elem.nodeName == "TEXTAREA") {
    var s = (elem.getAttribute("id"));
    s = s.split('_')[1];
    var strUntranslated = document.getElementById("msgset_"+s+"_singular").textContent;
    //console.log(strUntranslated);
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        if (elem.value==""){
          elem.value=xhttp.responseText;
        }
      }
    }

    //text = text.replace(/&/g, "");

    xhttp.open("GET", url+strUntranslated, true);
    console.log(url+strUntranslated);
    xhttp.send();
  }
}
//Javascript Document

console.log("This");
var textareaId = "id_target_f_0", /* current_textarea_target */
  url = "http://mozilla-nepal.org/translation-helper-pootle/"+
    "translate.php?string=", /* url for translation */
  textFrom = ".translation-text.js-translation-text"; /* Class for text */


console.log("Window: "); console.log(window.document.onclick);
console.log("Document: ");console.log(document.onclick);


document.onclick = function  (element) {
  if (element.srcElement.id == textareaId) {
    var text = document.querySelector(textFrom).innerText;
    text = encodeURI(text);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        console.log("something!");
        console.log(xhttp.responseText);
        if (document.querySelector("#" + textareaId).value == "") {
          //console.log(xhttp.responseText);
          document.querySelector("#" + textareaId).value = xhttp.responseText;
        }
      }
    };
    console.log(url+text);
    xhttp.open("GET", url + text, true);
    xhttp.send();
  }
  alert("This is onclick");
  return false;
}


alert("Hey!");
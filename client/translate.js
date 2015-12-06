/**
Dirty hack (for now), iterating
 */

var textarea_id="id_target_f_0"; //current_textarea_target
var url="<your_server_url>?string=";
var text_from=".translation-text.js-translation-text";

document.onclick = function  (e) {

	var elem, evt = e ? e:event;

	if (evt.srcElement)  elem = evt.srcElement;
	else if (evt.target) elem = evt.target;

	if (elem.getAttribute('id') == textarea_id) {
		var text = document.querySelector(text_from).textContent;
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				if (elem.value == ""){
					elem.value = xhttp.responseText;
				}
			}
		};
		text = text.replace(/&/g, "");
		xhttp.open("GET", url+text, true);
		console.log(url+text);
		xhttp.send();
	}
	return false;
}
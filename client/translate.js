/**
Dirty hack
 */

var textarea_id="id_target_f_0"; //current_textarea_target
var url="<your_server_url>?string=";
var text_from=".translation-text.js-translation-text";

document.onclick = function  (element) {
	var target = element.target || element.srcElement ;
	if (target.id == textarea_id) {
		var text = document.querySelector(text_from).innerText;
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				if (document.querySelector("#"+textarea_id).value==""){
					document.querySelector("#"+textarea_id).value=xhttp.responseText;
				}
			}
		};
		xhttp.open("GET", url+text, true);
		xhttp.send();
	}
	return false;
}
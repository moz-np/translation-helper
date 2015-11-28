/**
Dirty hack
 */
textarea_id="id_target_f_0";
url="http://hikathon/translate.php?string=";
text_from=".translation-text.js-translation-text";
document.onmouseover=function  (element) {
	if(element.srcElement.id==textarea_id){
		console.log(element)
		text=document.querySelector(text_from).innerText;
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				console.log(xhttp.responseText);
				document.querySelector("#"+textarea_id).value=xhttp.responseText;
			}
		};
		xhttp.open("GET", url+text, true);
		xhttp.send();
	}
	return true;
}
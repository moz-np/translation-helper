<?php
	$url="https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ne&dt=t&q=".urlencode($_GET['string']);
	$a= file_get_contents($url);
	$b=explode(",",$a);
	$c=explode('"', $b[0]);
	echo $c[1];
?>
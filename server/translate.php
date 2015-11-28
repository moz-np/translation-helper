<?php

  /* Enable CORS */
  header("Access-Control-Allow-Origin: *");

  /* Set UTF-8 Encoding */
  header('Content-Type: text/html; charset=utf-8');

  /* Require Config */
  require_once 'config.php';

  /* GET param */
  $str = $_GET['string'];

  /* urlencode it */
  $str = urlencode($str);

  /* URL */
  $url='https://translate.googleapis.com/translate_a/single?client=gtx&sl='.
    $source_lang.'&tl='.$target_lang.'&dt=t&q='.$str;


  /* Get the Contents */
  $contents = file_get_contents($url);

  /* The variable $contents is in a format [[["<translatedText",,]]]
   * , which cannot be parsed with json_decode. So we need a dirty hack
   * that would enable us to grab that translatedtext.
   *
   * If someone has a better and optimized version, please send a
   * pull request!
   *
   */
  echo substr($contents, 4, strpos(substr($contents, 4), '"'));
?>
<?php

  /* Enable CORS */
  header("Access-Control-Allow-Origin: *");

  /* Set UTF-8 Encoding */
  header('Content-Type: text/plain; charset=utf-8');

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
   *
   * UPDATE: Used regex and for loops to cover large areas.
   */

  //echo substr($contents, 4, strpos(substr($contents, 4), '"')); //OBSOLETE

  //$re = "/([\"'])(?:(?=(\\\\?))\\2.)*?\\1/";

  /* Set Regular Expression */
  /* Thanks to: OnlineCop @ #regex on irc.freenode.org */
  /* Find him on twitter: @OnlineCop */
  /* Also, Thanks to: http://regex101.com */

  $re = "/(?J)\"(?P<string>(?:\\\\.|[^\\\\\"]+)*)\"|'(?P<string>(?:\\\\.|[^\\\\']+)*)'/";

  //$re = "/(?J:(?<=\")(?P<string>(?:[^\\\\\"]++|\\\\.)*+)(?=\")|(?<=')(?P<string>(?:[^\\\\']++|\\\\.)*+)(?='))/";

  if(preg_match_all($re, $contents, $matches) != false) {
    $matches = $matches[0];

    /* Last one is source lang, omit that */
    for ($i=0; $i < count($matches) - 1; $i = $i + 2) {
      echo trim($matches[$i], '"');
    }

  } else {
    echo "म्याच भेटिएन ।"; //Convert this to custom error code;
  }
?>
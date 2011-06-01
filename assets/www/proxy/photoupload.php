<?php
// c: campaign id. required.
// u: user name. required.
// p: password (must be salted and hashed). required.
// i: a UUID. required.
// ci: client name or id. required
// the binary data itself as an attachment
   $c = $_REQUEST['c'];
   $u = $_REQUEST['u'];
   $p = $_REQUEST['p'];
   $i = $_REQUEST['i'];
   $ci = $_REQUEST['ci'];
   $url = $_REQUEST['url'];
   //$url = "http://i52.tinypic.com/261kcom.png";
   //$uuid = "EEC9323D-0F5E-419E-98AC-09BBA917475A";
   $imgfile = "images/{$i}.jpg";
   $data = file_get_contents($url);
   if (!$data) { 
      echo json_encode(array("result"=>"failure",
                             "errors"=>array(
                                          array(
                                             "code"=>0,
                                             "text"=>"failed to fetch file"
                                               )
                                            ))); 
      return;
   } 
   if (!file_put_contents($imgfile, $data)) { 
      echo json_encode(array("result"=>"failure",
                             "errors"=>array(
                                          array(
                                             "code"=>0,
                                             "text"=>"failed to save file"
                                               )
                                            ))); 
      return;
   } 
   
   $encoded_hash = '%242a%2404%24r8zKliEptVkzoiQgD833OeU9.H5iLJHnhJMGg12lAh.l4.xnVAdg.';
   $cmd = 'curl -v  -F "c='.$c.'" -F "u='.$u.'" -F "p='.$encoded_hash.'" -F "ci='.$ci.'" -F "i='.$i.'" -F "f=@'.$imgfile.'" "https://students.andwellness.org/app/u/image"';
   exec($cmd, $output, $return_var);      
   unlink($imgfile);   
   $json = implode("\n", $output);
   echo $json;
?> 

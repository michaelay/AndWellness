<?php

// c: campaign id. required.
// u: user name. required.
// p: password (must be salted and hashed). required.
// i: a UUID. required.
// ci: client name or id. required
// the binary data itself as an attachment
/*
   $c = $_REQUEST['c'];
   $u = $_REQUEST['u'];
   $p = $_REQUEST['p'];
   $i = $_REQUEST['i'];
   $ci = $_REQUEST['ci'];
   $url = $_REQUEST['url'];
   $url = "http://i52.tinypic.com/261kcom.png";
*/  
   
   $server_url = "https://students.andwellness.org/app/u/image";   
   $ch = curl_init();
   curl_setopt($ch, CURLOPT_HEADER, 1);
   curl_setopt($ch, CURLOPT_VERBOSE, 1);
   //curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
   curl_setopt($ch, CURLOPT_UPLOAD, 1);
   curl_setopt($ch, CURLOPT_INFILE, "shutup.jpg");
   curl_setopt($ch, CURLOPT_HTTPHEADER, array('Expect:',
                                              'Path:/app/u/image'));
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
   //curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
   //curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible;)");
   curl_setopt($ch, CURLOPT_URL, $server_url);
   curl_setopt($ch, CURLOPT_POST, true);
   // same as <input type="file" name="file_box">
   $post = array(
      "c"=>"NIH",      
      "u"=>"reel.purism",
      "p"=>'$2a$04$r8zKliEptVkzoiQgD833OeU9.H5iLJHnhJMGg12lAh.l4.xnVAdg.',
      "i"=>"EEC9323D-0F5E-419E-98AC-09BBA917475A",
      "ci"=>"html5",
      //"f"=>"@http://i52.tinypic.com/261kcom.png",
      "f"=>'@/Library/WebServer/Documents/aws/proxy/shutup.jpg'
   );
   curl_setopt($ch, CURLOPT_POSTFIELDS, $post); 
   $response = curl_exec($ch);

   print_r(curl_getinfo($ch));
   echo "<br/>";
   print_r($response);
   
?>
<form method="POST" ENCTYPE="multipart/form-data" action="https://students.andwellness.org/app/u/image">
   <input type="text" name="c" value="NIH" />
   <input type="text" name="u" value="reel.purism" />
   <input type="text" name="p" value="$2a$04$r8zKliEptVkzoiQgD833OeU9.H5iLJHnhJMGg12lAh.l4.xnVAdg." />
   <input type="text" name="i" value="EEC9323D-0F5E-419E-98AC-09BBA917475A" />
   <input type="text" name="ci" value="html5" />
   <input type="file" name="f" />   
   <input type="submit" name="submit" value="Submit" />
</form>

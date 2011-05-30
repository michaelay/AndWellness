$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  },
  hasPhoneGap: function() { 
/*
   try {
      return 'device' in window && window['device'] !== null;
   } catch (e) {
      return false;
   }
*/
   // do sth nasty here. mahahaha
   if (navigator.userAgent.toLowerCase().search("android") > -1) { 
      return true;
   } else {
      return false;
   } 
  }
});
/*example 
var allVars = $.getUrlVars();
var byName = $.getUrlVar('name');
$.hasPhoneGap();
*/

/**
 * Provide a cross browse JSON.stringify
 */
var JSON = JSON || {};
// implement JSON.stringify serialization
JSON.stringify = JSON.stringify || function (obj) {
   var t = typeof (obj);
   if (t != "object" || obj === null) {
      // simple data type
      if (t == "string") obj = '"'+obj+'"';
      return String(obj);
   }
   else {
      // recurse array or object
      var n, v, json = [], arr = (obj && obj.constructor == Array);
      for (n in obj) {
         v = obj[n]; t = typeof(v);
         if (t == "string") v = '"'+v+'"';
         else if (t == "object" && v !== null) v = JSON.stringify(v);
         json.push((arr ? "" : '"' + n + '":') + String(v));
      }
      return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
   }
};

 
/* randomUUID.js - Version 1.0
*
* Copyright 2008, Robert Kieffer
*
* This software is made available under the terms of the Open Software License
* v3.0 (available here: http://www.opensource.org/licenses/osl-3.0.php )
*
* The latest version of this file can be found at:
* http://www.broofa.com/Tools/randomUUID.js
*
* For more information, or to comment on this, please go to:
* http://www.broofa.com/blog/?p=151
*/
 
/**
* Create and return a "version 4" RFC-4122 UUID string.
*/
function randomUUID() {
  var s = [], itoh = '0123456789ABCDEF';
 
  // Make array of random hex digits. The UUID only has 32 digits in it, but we
  // allocate an extra items to make room for the '-'s we'll be inserting.
  for (var i = 0; i <36; i++) s[i] = Math.floor(Math.random()*0x10);
 
  // Conform to RFC-4122, section 4.4
  s[14] = 4;  // Set 4 high bits of time_high field to version
  s[19] = (s[19] & 0x3) | 0x8;  // Specify 2 high bits of clock sequence
 
  // Convert to hex chars
  for (var i = 0; i <36; i++) s[i] = itoh[s[i]];
 
  // Insert '-'s
  s[8] = s[13] = s[18] = s[23] = '-';
 
  return s.join('');
}

// save for later upload 
// do it in a naive way for now: 
// take the existing array, append 
function clearAll() { 
   localStorage.clear();
} 
/*
function savePhoto(uuid, url) {
   var allPhoto = getAllPhoto(); 
   allPhoto.push([uuid, url]);
   // save it back 
   console.log("savephoto");
   console.log(allPhoto);
   localStorage.setItem("photo", JSON.stringify(allPhoto)); 
} 
*/
function savePhoto(data) { 
   var allPhoto = getAllPhoto(); 
   allPhoto.push(data); 
   localStorage.setItem("photo", JSON.stringify(allPhoto)); 
} 
function saveSurveyResult(newResult) {
   var allResult = getAllSurveyResult(); 
   //allResult = new Array();
   allResult.push(newResult);
   console.log(allResult);
   localStorage.setItem("survey", JSON.stringify(allResult)); 
} 

// return array of uuid->url
// empty array if nothing in storage
function getAllPhoto() { 
   var allPhoto = localStorage.getItem("photo"); 
   if (!allPhoto) { 
      return new Array(); 
   } 
   return JSON.parse(allPhoto);
} 
// return array of json str
function getAllSurveyResult() {
   var allResult = localStorage.getItem("survey"); 
   if (!allResult) { 
      return new Array(); 
   } 
   return JSON.parse(allResult);
}

function padzero(n) {
   return n < 10 ? '0' + n : n;
}
function pad2zeros(n) {
   if (n < 100) {
      n = '0' + n;
   }
   if (n < 10) {
      n = '0' + n;
   }
   return n;     
}
function toISOString(d) {
   return d.getUTCFullYear() + '-' +  padzero(d.getUTCMonth() + 1) + '-' + padzero(d.getUTCDate()) + 'T' + padzero(d.getUTCHours()) + ':' +  padzero(d.getUTCMinutes()) + ':' + padzero(d.getUTCSeconds()) + '.' + pad2zeros(d.getUTCMilliseconds()) + 'Z';
}
function toDateString(d) {
   return d.getUTCFullYear() + '-' +  padzero(d.getUTCMonth() + 1) + '-' + padzero(d.getUTCDate()) + ' ' + padzero(d.getUTCHours()) + ':' +  padzero(d.getUTCMinutes()) + ':' + padzero(d.getUTCSeconds());
}


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
    console.log(typeof device);
    console.log(typeof device == "undefined");
    console.log(typeof device == undefined);
    console.log(typeof device != "undefined");
    console.log("done test");
    return (typeof device != "undefined");
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


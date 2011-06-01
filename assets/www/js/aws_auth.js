// requires aws_utility.js
// requires jquery.cookie.js
var bcryptPassword = function(password) { 
   var cryptKey = "$2a$04$r8zKliEptVkzoiQgD833Oe";
   var hash = null;
   try {
      bcrypt = new bCrypt();
      hash = bcrypt.hashpw(password, cryptKey);
   } catch(err) {
      alert(err);
      return;
   } 
   return hash;
}; 
/**
 * authenticate with server and get session token
 * @param username username login name 
 * @param password user password 
 * @return user token in string format if success, null otherwise
 */
var authenticate = function(username, password) { 
   var token = null;
   // authenticate with server
   var param = 'u='+username+'&p='+password+'&ci=curl';
   $.ajax({ 
      url: 'https://students.andwellness.org/app/auth_token',
      //url: 'test_api.html', 
      data: param,
      type: 'POST',
      dataType: 'json',
      async: false,
      success: function (data) { 
         token = data.token;
         // stored in session cookie
         localStorage.u = username; 
         localStorage.p = bcryptPassword(password);
         localStorage.t = token;
      },
      error: function(jqXHR, textStatus, errorThrown) { 
         // remove cookie otherwise
         localStorage.u = ""; 
         localStorage.p = "";
         localStorage.t = "";
      }
/*
      complete: function(jqXHR, textStatus) { 
      }
*/
   });
   return token; 
};
/**
 * Logout 
 */
var logout = function() { 
    localStorage.u = ""; 
    localStorage.p = "";
    localStorage.t = "";
};
var getLogin = function() { 
   var u = localStorage.u;
   var p = localStorage.p;
   var t = localStorage.t;
   if (u && p && t) {
      return [u, p, t];
   } else { 
      return null;
   } 
}; 
/**
 * Get the auth token for use in AndWellness APIs
 */  
var getAuthToken = function() { 
   return localStorage.t; 
};
var getUsername = function() { 
   return localStorage.u; 
}; 
var getPasswordHash = function() { 
   return localStorage.p; 
};  

/**
 * Upload photo 
 */ 
var uploadPhoto = function(dataObj, successCallback, failureCallback) { 
   var result = false;
   // create an invisible form and submit the data
   if ($.hasPhoneGap()) { 
      var uploader = new PhotoUploader(); 
      uploader.upload(dataObj, successCallback, failureCallback);
      result = true;
   } else { 
      // post to proxy 
      var post_data = "c=" + dataObj.c
                    + "&u=" + dataObj.u
                    + "&p=" + dataObj.p
                    + "&i=" + dataObj.i
                    + "&ci=" + dataObj.ci
                    + "&url=" + dataObj.url;
      $.ajax({
         url: 'proxy/photoupload.php',
         data: post_data,   
         type: 'POST', 
         dataType: 'json', 
         async: false, 
         success: function(data) {
            console.log("proxy upload completed");
            result = true;  
         },
         error: function(jqXHR, textStatus, errorThrown) { 
            console.log("proxy upload failed");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            result = false; 
         } 
      });
      return result;
   } 
}; 
// upload one single survey 
var uploadSurvey = function(dataObj) {
   var post_data = "c=" + dataObj.c
                 + "&cv=" + dataObj.cv
                 + "&u=" + dataObj.u
                 + "&p=" + dataObj.p
                 + "&ci=" + dataObj.ci
                 + "&d=" + dataObj.d;
   var result = false; 
   $.ajax({
      url: 'https://students.andwellness.org/app/u/survey',
      data: post_data,
      type: 'POST', 
      dataType: 'json',
      async: false,
      success: function(data) {
         if (data.result != "success") { 
            result = false; 
            console.log(data);
         } else { 
            result = true;
         } 
      }, 
      error: function(jqXHR, textStatus, errorThrown) { 
         result = false; 
      }
   });
   return result; 
};

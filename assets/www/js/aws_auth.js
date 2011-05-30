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
         $.cookie('u', username); 
         $.cookie('p', bcryptPassword(password));
         $.cookie('t', token);
      },
      error: function(jqXHR, textStatus, errorThrown) { 
         // remove cookie otherwise
         $.cookie('u', "", { expires: -1} ); 
         $.cookie('p', "", { expires: -1} );
         $.cookie('t', "", { expires: -1} );
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
   $.cookie('u', "", { expires: -1} );
   $.cookie('p', "", { expires: -1} );
   $.cookie('t', "", { expires: -1} );
};
var getLogin = function() { 
   var u = $.cookie('u');
   var p = $.cookie('p');
   var t = $.cookie('t');
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
   return $.cookie("t"); 
};
var getUsername = function() { 
   return $.cookie("u"); 
}; 
var getPasswordHash = function() { 
   return $.cookie("p"); 
};  

// helper methods, do not call directly
/*
var setAuthToken = function(token) { 
   // omit expiry date, a session cookie, deleted when browse is closed 
   $.cookie("token", token);
} 
var deleteAuthToken = function() { 
   $.cookie("token", "", { expires: -1} );
}
*/

/**
 * Upload image 
 */ 
var uploadImage = function(url, uuid, campaignId, ci) { 
   // get u, p
   var u = getUsername(); 
   var p = getPasswordHash();
   // TODO: do that upload using sync ajax    
}; 
// upload one single survey 
var uploadSurvey = function(dataObj) {
   var post_data = "c=" + dataObj.c
                 + "&cv=" + dataObj.cv
                 + "&u=" + dataObj.u
                 + "&p=" + dataObj.p
                 + "&ci=" + dataObj.ci
                 + "&d=" + dataObj.d;
   $.ajax({
      url: 'https://students.andwellness.org/app/u/survey',
      data: post_data,
      type: 'POST', 
      dataType: 'json',
      async: false,
      success: function(data) {
         if (data.result != "success") { 
            alert("failed with error: " + data.errors[0].text);
         } 
      }, 
      error: function(jqXHR, textStatus, errorThrown) { 
         alert("failed to upload survey");
      }
   }); 
};

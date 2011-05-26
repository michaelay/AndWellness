// requires aws_utility.js
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
      },
      error: function(jqXHR, textStatus, errorThrown) { 
      }
/*
      complete: function(jqXHR, textStatus) { 
      }
*/
   });
   return token; 
} 

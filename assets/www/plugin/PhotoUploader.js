/* 
 * @return Instance of PhotoUploader
 */
var PhotoUploader = function() { 
}
/**
 * @param dataObj
 * @param successCallback 
 * @param failureCallback 
 */
PhotoUploader.prototype.upload = function(dataObj,successCallback, failureCallback) {
    return PhoneGap.exec(
                         successCallback,
                         failureCallback,
/*
                         function(result) { 
                           if (result.result == "success") {
                              alert("image upload success");
                           } else { 
                              alert("image upload failed");
                           } 
                         } ,
                         function(error) { 
                           alert("image upload connection failed");
                         },
*/
                         'PhotoUploaderPlugin',
                         'upload',           //Telling the plugin, which action we want to perform
                         [dataObj]);        //Passing a list of arguments to the plugin.
   return ret;
};

/**
 * <ul>
 * <li>Register the Directory Listing Javascript plugin.</li>
 * <li>Also register native call which will be called when this plugin runs</li>
 * </ul>
 */
PhoneGap.addConstructor(function() {
   //Register the javascript plugin with PhoneGap
   PhoneGap.addPlugin('photouploader', new PhotoUploader());
   //Register the native class of plugin with PhoneGap
   PluginManager.addService("PhotoUploaderPlugin","edu.ucla.cens.andwellness.mobile.plugin.PhotoUploaderPlugin");
});

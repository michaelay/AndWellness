/**
 * To use: 
 * var trigger = new LocationTrigger(); 
 * trigger.set(...);
 * trigger.getAll(...);
 * @return Instance of LocationTrigger
 */

var LocationTrigger = function() { 
}
 
/**
 * @param time time for which LocationTrigger is to be set
 * @param successCallback The callback which will be called when directory listing is successful
 * @param failureCallback The callback which will be called when directory listing encouters an error
 */
/*
var dataObj = {
               category: "1231212132", 
               label: "1231212132", 
               survey_id: "asfas"
               latitude: 123.11,
               longitude: 123.12,
               repeat: []
              };
*/
LocationTrigger.prototype.set = function(dataObj, successCallback, failureCallback) {
/*
   return PhoneGap.exec(successCallback,    //Callback which will be called when adding time trigger is successful
                        failureCallback,     //Callback which will be called when adding a time trigger encounters an error
                        'LocationTrigger',  //Telling PhoneGap that we want to run "DirectoryListing" Plugin
                        'add',              //Telling the plugin, which action we want to perform
                        [time]);        //Passing a list of arguments to the plugin, in this case this is the time to be added
*/
   var resultObj = { result: "success" }; 
   successCallback(resultObj);    
};
 
LocationTrigger.prototype.getAll = function(successCallback, failureCallback) {
   var resultObj = { 
                    triggers: [ 
                               { category: "Home", label: "plalash1", latitude: 123.123, longitude: 123.12, survey_id: "exerciseAndActivity", repeat: ["M","T","W","TH","F","ST","S"] },
                               { category: "Work", label: "plalash1", latitude: 123.123, longitude: 123.12, survey_id: "foodButton", repeat: ["M","T"] },
                              ] 
                   };
   successCallback(resultObj);
} ;
/**
 * <ul>
 * <li>Register the Listing Javascript plugin.</li>
 * <li>Also register native call which will be called when this plugin runs</li>
 * </ul>
 */
PhoneGap.addConstructor(function() {
//Register the javascript plugin with PhoneGap
PhoneGap.addPlugin('locationtrigger', new trigger());
 
//Register the native class of plugin with PhoneGap
PluginManager.addService("LocationTrigger","com.andwellness.trigger.time.LocationTrigger");
});

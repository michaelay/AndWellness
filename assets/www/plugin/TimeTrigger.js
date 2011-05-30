/**
 *  
 * @return Instance of TimeTrigger
 */
var TimeTrigger = function() { 
}
 
/**
 * @param time time for which TimeTrigger is to be set
 * @param successCallback The callback which will be called when directory listing is successful
 * @param failureCallback The callback which will be called when directory listing encouters an error
 */
/*
var dataObj = {
               time: 123122, 
               label: "1231212132", 
               repeat: [],               
               survey_id: "asdfas",
              };
{ 
   result: "success"
} 

{ results: "failure" } 
*/ 
TimeTrigger.prototype.set = function(dataObj, successCallback, failureCallback) {
/*
 return PhoneGap.exec(successCallback,    //Callback which will be called when adding time trigger is successful
 failureCallback,     //Callback which will be called when adding a time trigger encounters an error
 'TimeTrigger',  //Telling PhoneGap that we want to run "DirectoryListing" Plugin
 'add',              //Telling the plugin, which action we want to perform
 [time]);        //Passing a list of arguments to the plugin, in this case this is the time to be added
*/
   var resultObj = {
                     result: "success"
                   };
   successCallback(resultObj); 
};

TimeTrigger.prototype.getAll = function(successCallback, failureCallback) {
   var resultObj = { 
                    triggers: [
                               { label: "plalash1", timestamp: 1306795504, survey_id: "exerciseAndActivity", repeat: ["M","T","W","TH","F","ST","S"] },
                               { label: "plalash_eat", timestamp: 1306795504, survey_id: "foodButton", repeat: ["ST", "S"] }
               
                              ]
                   };
   successCallback(resultObj);
} 

/**
 * <ul>
 * <li>Register the Listing Javascript plugin.</li>
 * <li>Also register native call which will be called when this plugin runs</li>
 * </ul>
 */
PhoneGap.addConstructor(function() {
//Register the javascript plugin with PhoneGap
PhoneGap.addPlugin('timetrigger', new trigger());
 
//Register the native class of plugin with PhoneGap
PluginManager.addService("TimeTrigger","edu.ucla.cens.andwellness.mobile.plugin.TimeTrigger");
});

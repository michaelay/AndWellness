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

TimeTrigger.prototype.set = function(dataObj, successCallback, failureCallback) {

    return PhoneGap.exec(successCallback, 
                         failureCallback, 
                         'TimeTriggerPlugin',
                         'set',
                         [dataObj]);
    
 }

TimeTrigger.prototype.get = function(successCallback, failureCallback) {
   
   /* var resultObj = { 
                    result: "success",
                    triggers: [
                               { time: "2312", survey_id: ["exerciseAndActivity","foodButton"], repeat: ["Monday","Tuesday"] },
                               { time: "1126", survey_id: ["foodButton"], repeat: ["Saturday","Sunday"] }
               
                              ]
                   };
    
    successCallback(resultObj); */
    
    return PhoneGap.exec(successCallback,    //Callback which will be called when adding time trigger is successful
            failureCallback,     //Callback which will be called when adding a time trigger encounters an error
            'TimeTriggerPlugin',  //Telling PhoneGap that we want to run "DirectoryListing" Plugin
            'get',              //Telling the plugin, which action we want to perform
            []);        //Passing a list of arguments to the plugin, in this case this is the time to be added
     
    
    
} 

/**
 * <ul>
 * <li>Register the Listing Javascript plugin.</li>
 * <li>Also register native call which will be called when this plugin runs</li>
 * </ul>
 */
PhoneGap.addConstructor(function() {
//Register the javascript plugin with PhoneGap
PhoneGap.addPlugin('timetrigger', new TimeTrigger());
 
//Register the native class of plugin with PhoneGap
PluginManager.addService("TimeTriggerPlugin","edu.ucla.cens.andwellness.mobile.plugin.TimeTriggerPlugin");
});

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
               survey_id: ["asfas"]
              };
*/
LocationTrigger.prototype.set = function(dataObj, successCallback, failureCallback) {
   var resultObj = null;
   return PhoneGap.exec(successCallback, 
                        failureCallback, 
                        'LocationTriggerPlugin',
                        'set',
                        [dataObj]);
   
}

LocationTrigger.prototype.addlocation = function(dataObj, successCallback, failureCallback) {
       
       return PhoneGap.exec(successCallback,    //Callback which will be called when adding time trigger is successful
                            failureCallback,     //Callback which will be called when adding a time trigger encounters an error
                            'LocationTriggerPlugin',  //Telling PhoneGap that we want to run "DirectoryListing" Plugin
                            'addloc',              //Telling the plugin, which action we want to perform
                            [dataObj]);        //Passing a list of arguments to the plugin, in this case this is the time to be added
      
};

LocationTrigger.prototype.getlocation = function(successCallback, failureCallback) {
    
    return PhoneGap.exec(successCallback,    //Callback which will be called when adding time trigger is successful
                         failureCallback,     //Callback which will be called when adding a time trigger encounters an error
                         'LocationTriggerPlugin',  //Telling PhoneGap that we want to run "DirectoryListing" Plugin
                         'getloc',              //Telling the plugin, which action we want to perform
                         []);        //Passing a list of arguments to the plugin, in this case this is the time to be added
   
};

LocationTrigger.prototype.removelocation = function(dataObj, successCallback, failureCallback) {
       var resultObj = { result: "success" }; 
       successCallback(resultObj);    
};

LocationTrigger.prototype.get = function(successCallback, failureCallback) {
   /*
    var resultObj = { 
                    result: "success",
                    triggers: [ 
                               { category: "Home", latitude: 123.123, longitude: 123.12, survey_id: ["exerciseAndActivity"]},
                               { category: "Work", latitude: 123.123, longitude: 123.12, survey_id: ["foodButton","exerciseAndActivity"]},
                               { category: "Work", latitude: 123.123, longitude: 123.12, survey_id: ["foodButton"]}
                              ]
   
                   };
   successCallback(resultObj);*/
    
   return PhoneGap.exec(successCallback,
                        failureCallback,
                        'LocationTriggerPlugin',
                        'get',
                        []); 

} ;
/**
 * <ul>
 * <li>Register the Listing Javascript plugin.</li>
 * <li>Also register native call which will be called when this plugin runs</li>
 * </ul>
 */
PhoneGap.addConstructor(function() {
//Register the javascript plugin with PhoneGap
PhoneGap.addPlugin('locationtrigger', new LocationTrigger());
 
//Register the native class of plugin with PhoneGap
PluginManager.addService("LocationTriggerPlugin","edu.ucla.cens.andwellness.mobile.plugin.LocationTriggerPlugin");
});

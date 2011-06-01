/**
 * 
 */
package edu.ucla.cens.andwellness.mobile.plugin;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.Writer;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.os.Environment;

import com.phonegap.api.Plugin;
import com.phonegap.api.PluginResult;
import com.phonegap.api.PluginResult.Status;

/**
 * @author mistralay
 *
 */
public class LocationTriggerPlugin extends Plugin {
	
    String myString = null;
    String EXTFILENAME = "blah.txt";
    File root = Environment.getExternalStorageDirectory();
    File myfile = new File(root, EXTFILENAME);
	
	/* (non-Javadoc)
	 * @see com.phonegap.api.Plugin#execute(java.lang.String, org.json.JSONArray, java.lang.String)
	 */
	@Override
	public PluginResult execute(String action, JSONArray data, String callbackId) {
		PluginResult result = null;
		
		if (action.equals("set")) { 
			JSONObject dataObject;
			try {
								
				myString = data.getString(0);
				dataObject = data.getJSONObject(0);
								
				
				//String category = dataObject.getString("category");
				//String surveyId = dataObject.getString("survey_id");
//				long latitude = dataObject.getLong("latitude");
//				long longitude = dataObject.getLong("longitude");
//				JSONArray repeatArray = dataObject.getJSONArray("repeat");
				
//			    FileOutputStream out = new FileOutputStream("/sdcard/location_temp.jpg");
			   
				
				try {
					writeToExternal();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			
				//JSONObject apiResult = new JSONObject();
				//apiResult.put("result", "success");
				result = new PluginResult(Status.OK, dataObject); 
				
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} else if (action.equals("getAll")) { 
			JSONObject apiResult = new JSONObject();
			try {
				apiResult.put("result", "success");
				
				JSONArray repeatArray = new JSONArray();
				repeatArray.put("M");
				repeatArray.put("T");
				repeatArray.put("W");
				
				JSONObject object1 = new JSONObject(); 
				object1.put("category", "home");
				object1.put("label", "palash1");
				object1.put("latitude", 123.123);
				object1.put("longitude", 123.123);
				object1.put("survey_id", "exerciseAndActivity");
				object1.put("repeat", repeatArray);
				
				JSONArray triggerArray = new JSONArray(); 
				triggerArray.put(object1);
				
				apiResult.put("triggers", triggerArray);
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			result = new PluginResult(Status.OK, apiResult); 			
		}
		
		
		return result;
	}
	
	private void writeToExternal() throws IOException {
		// TODO Auto-generated method stub
		
		try {
			OutputStream out = new FileOutputStream(myfile, false);
			out.write(myString.getBytes());
			out.close();
		} catch (FileNotFoundException e) {
			//e.printStackTrace();
		}
		
	}

}

/**
 * 
 */
package edu.ucla.cens.andwellness.mobile.plugin;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
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
	
 
	
	/* (non-Javadoc)
	 * @see com.phonegap.api.Plugin#execute(java.lang.String, org.json.JSONArray, java.lang.String)
	 */
	@Override
	public PluginResult execute(String action, JSONArray data, String callbackId) {
		PluginResult result = null;
		
		if (action.equals("set")) { 
			JSONObject dataObject;
			JSONArray ObjArr = null;
			String myString = null;
			String EXTFILENAME = "location_triggers.txt";
			
			try {
								
				dataObject = data.getJSONObject(0);
				
				try {
					ObjArr = readFromExternal(EXTFILENAME);
				} catch (IOException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				
				ObjArr.put(dataObject);
				
				myString = ObjArr.toString();
				
				//String category = dataObject.getString("category");
				//String surveyId = dataObject.getString("survey_id");
//				long latitude = dataObject.getLong("latitude");
//				long longitude = dataObject.getLong("longitude");
//				JSONArray repeatArray = dataObject.getJSONArray("repeat");
				
//			    FileOutputStream out = new FileOutputStream("/sdcard/location_temp.jpg");
			   
				
				try {
					writeToExternal(EXTFILENAME, myString);
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			
				JSONObject apiResult = new JSONObject();
				apiResult.put("result", "success");
				result = new PluginResult(Status.OK, apiResult); 
				
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}else if (action.equals("get")){
		
			String EXTFILENAME = "location_triggers.txt";
			JSONArray ObjArr = null;
			try {
				ObjArr = readFromExternal(EXTFILENAME);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			JSONObject dataObj = new JSONObject();
			
			try {
				dataObj.put("result", "success");
				dataObj.put("triggers", ObjArr);
				result = new PluginResult(Status.OK, dataObj);
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				JSONObject apiResult = new JSONObject();
				try {
					apiResult.put("result", "failed");
				} catch (JSONException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				result = new PluginResult(Status.JSON_EXCEPTION, apiResult);
			}
			
			
		}else if (action.equals("getAll")) { 
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
	
	private void writeToExternal(String filename, String myString) throws IOException {
		// TODO Auto-generated method stub
		
		try {
			File root = Environment.getExternalStorageDirectory();
			File myfile = new File(root, filename);
			OutputStream out = new FileOutputStream(myfile, false);
			out.write(myString.getBytes());
			out.close();
		} catch (FileNotFoundException e) {
			//e.printStackTrace();
		}
		
	}
	
	private JSONArray readFromExternal(String filename) throws IOException {
	
	   StringBuilder contents = new StringBuilder();
	   
	   try {
	   File root = Environment.getExternalStorageDirectory();
	   File myfile = new File(root, filename);
 	   FileInputStream fileIS = new FileInputStream(myfile);
 	   BufferedReader buf = new BufferedReader(new InputStreamReader(fileIS));
 	   String readString = new String();
 	  while (( readString = buf.readLine()) != null){
          contents.append(readString);
          contents.append(System.getProperty("line.separator"));
        }
	   }
	   catch (FileNotFoundException e) {
			//e.printStackTrace();
		}
	
	   JSONArray JSONArr = null;
 	  
	try {
		if(contents.toString().length()!=0)
		 JSONArr = new JSONArray(contents.toString());
		else
		 JSONArr = new JSONArray();
	} catch (JSONException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
 	  
 	 return JSONArr;
	}

}

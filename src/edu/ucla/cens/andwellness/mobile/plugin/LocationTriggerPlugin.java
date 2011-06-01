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
	@SuppressWarnings("null")
	@Override
	public PluginResult execute(String action, JSONArray data, String callbackId) {
		PluginResult result = null;
		
		
		if (action.equals("set") || action.equals("addloc")) {
			
			
			JSONArray ObjArr = null;
			String myString = null;
			String EXTFILENAME = null;
			
			if(action.equals("set"))
			EXTFILENAME = "location_triggers.txt";
			else if(action.equals("addloc"))
			EXTFILENAME = "locations.txt";
			
			try {
				
				
				if(action.equals("addloc"))
				{
					JSONObject dataObject;
					dataObject = data.getJSONObject(0);
					
					try {
						ObjArr = readFromExternal(EXTFILENAME);
					} catch (IOException e1) {
						// TODO Auto-generated catch block
						e1.printStackTrace();
					}
					
						if(dataObject.getString("category").equals("Home"))
						{
							ObjArr.put(0, dataObject);
							if(ObjArr.isNull(1)){
								JSONObject temp = new JSONObject();
								temp.put("category", "Work");
								JSONArray location = new JSONArray();
								temp.put("locations", location);									
								ObjArr.put(1, temp);
							}
						}	
						else
						{
							ObjArr.put(1, dataObject);
							if(ObjArr.isNull(0)){
								JSONObject temp = new JSONObject();
								temp.put("category", "Home");
								JSONArray location = new JSONArray();
								temp.put("locations", location);
								ObjArr.put(0, temp);
							}
						}
				}			
				else if(action.equals("set"))
				{
					ObjArr = data.getJSONArray(0);	
				}
				
				myString = ObjArr.toString();
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
				JSONObject apiResult = new JSONObject();
				try {
					apiResult.put("result", "failed");
				} catch (JSONException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				result = new PluginResult(Status.JSON_EXCEPTION, apiResult);
			}
		}else if (action.equals("get") || action.equals("getloc")){
		
			String EXTFILENAME = null;
			
			if(action.equals("get"))
			EXTFILENAME = "location_triggers.txt";	
			else if(action.equals("getloc"))
			EXTFILENAME = "locations.txt";
			
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
				
				if(action.equals("get"))
					dataObj.put("triggers", ObjArr);
				else if(action.equals("getloc"))
					dataObj.put("types", ObjArr);
					
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

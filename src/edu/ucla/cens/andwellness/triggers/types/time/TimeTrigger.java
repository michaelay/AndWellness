package edu.ucla.cens.andwellness.triggers.types.time;

import org.json.JSONObject;

import android.content.Context;
import android.content.Intent;
import edu.ucla.cens.andwellness.triggers.base.TriggerBase;
import edu.ucla.cs.cs219.andwellness.R;

//import com.andwellness.trigger.time.R;

public class TimeTrigger extends TriggerBase {
	
	private static final String DEBUG_TAG = "TimeTrigger";
	
	private static final String TRIGGER_TYPE = "TimeTrigger";	
	//TODO localize
	private static final String DISP_NAME = "Time Trigger";
	
	@Override
	public String getTriggerTypeDisplayName() {
		
		return DISP_NAME;
	}

	@Override
	public String getTriggerType() {
		
		return TRIGGER_TYPE;
	}

	@Override
	public boolean hasSettings() {
		
		return false;
	}

	@Override
	public void stopTrigger(Context context, int trigId, String trigDesc) {
		Intent i = new Intent(context, TimeTrigService.class);
		i.setAction(TimeTrigService.ACTION_REMOVE_TRIGGER);
		i.putExtra(TimeTrigService.KEY_TRIG_ID, trigId);
		i.putExtra(TimeTrigService.KEY_TRIG_DESC, trigDesc);
		context.startService(i);
	}

	@Override
	public void resetTrigger(Context context, int trigId, String trigDesc) {
		Intent i = new Intent(context, TimeTrigService.class);
		i.setAction(TimeTrigService.ACTION_RESET_TRIGGER);
		i.putExtra(TimeTrigService.KEY_TRIG_ID, trigId);
		i.putExtra(TimeTrigService.KEY_TRIG_DESC, trigDesc);
		context.startService(i);
	}

	@Override
	public void startTrigger(Context context, int trigId, String trigDesc) {
		Intent i = new Intent(context, TimeTrigService.class);
		i.setAction(TimeTrigService.ACTION_SET_TRIGGER);
		i.putExtra(TimeTrigService.KEY_TRIG_ID, trigId);
		i.putExtra(TimeTrigService.KEY_TRIG_DESC, trigDesc);
		context.startService(i);
	}
	
	
	@Override
	public void launchTriggerCreateActivity(Context context, boolean adminMode) {
	
		/*
		TimeTrigEditActivity.setOnExitListener(
					new TimeTrigEditActivity.ExitListener() {
			
			@Override
			public void onDone(Context context, int trigId, 
							   String trigDesc) {
				
				Log.i(DEBUG_TAG, "TimeTrigger: Saving new trigger: " + trigDesc);
				addNewTrigger(context, trigDesc);
			}
		});
		
		
		context.startActivity(new Intent(context, 
							  TimeTrigEditActivity.class));
	*/
	}

	@Override
	public void launchTriggerEditActivity(Context context, int trigId, String trigDesc,
										  boolean adminMode) {
		/*
		TimeTrigEditActivity.setOnExitListener(
				new TimeTrigEditActivity.ExitListener() {
		
			@Override
			public void onDone(Context context, int trigId, 
							   String trigDesc) {
				
				updateTrigger(context, trigId, trigDesc);
			}
		});
	
	
		Intent i = new Intent(context, TimeTrigEditActivity.class);
		i.putExtra(TimeTrigEditActivity.KEY_TRIG_ID, trigId);
		i.putExtra(TimeTrigEditActivity.KEY_TRIG_DESC, trigDesc);
		i.putExtra(TimeTrigEditActivity.KEY_ADMIN_MODE, adminMode);
		context.startActivity(i);
		*/
	}

	@Override
	public void launchSettingsEditActivity(Context context, boolean adminMode) {
		
	}
	
	@Override
	public void resetSettings(Context context) {
		
	}

	@Override
	public String getDisplaySummary(Context context, String trigDesc) {
		TimeTrigDesc conf = new TimeTrigDesc();
		
		if(!conf.loadString(trigDesc)) {
			return null;
		}
		
		return conf.getRepeatDescription();
	}

	@Override
	public String getDisplayTitle(Context context, String trigDesc) {
		TimeTrigDesc conf = new TimeTrigDesc();
		
		if(!conf.loadString(trigDesc)) {
			return null;
		}
		
		String ret = conf.getTriggerTime().toString();
		
		if(conf.isRandomized()) {
			ret = conf.getRangeStart().toString() 
				  + " - "
				  + conf.getRangeEnd().toString();
		}
		
		return ret;
	}

	@Override
	public int getIcon() {
		return R.drawable.clock;
	}

	@Override
	public JSONObject getPreferences(Context context) {
		return new JSONObject();
	}
}

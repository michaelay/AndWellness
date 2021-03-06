/* 
   andwellness javascript 
   not OO, just for testing
*/
function CampaignXMLLoader () { 
// {{{ defaultCampaignXML
   this.defaultCampaignXML = '<?xml version="1.0" encoding="UTF-8"?> \
<campaign>\
  <campaignName>NIH</campaignName>\
  <campaignVersion>1.1</campaignVersion>\
  <serverUrl>https://students.andwellness.org/</serverUrl>\
  \
  <surveys>\
       <survey>\
\
      <id>dietMood</id>\
      <title>Diet and Mood</title>\
      <description>This is your Diet and Mood survey</description>\
      <submitText>Please use the food button on your phone top to take pictures of your food.</submitText>\
      <showSummary>false</showSummary>\
      <anytime>true</anytime>\
\
      <contentList>\
      \
        <prompt>\
          <id>mood</id>\
          <displayType>category</displayType>\
          <displayLabel>How would you describe your mood at this moment</displayLabel>\
          <promptText>How would you describe your mood at this moment?</promptText>\
          <promptType>multi_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>Sad</label>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Relaxed</label>\
            </property>\
            <property>\
              <key>2</key>\
              <label>Anxious</label>\
            </property>\
            <property>\
              <key>3</key>\
              <label>Tired</label>\
            </property>\
            <property>\
              <key>4</key>\
              <label>Happy</label>\
            </property>\
            <property>\
              <key>5</key>\
              <label>Upset</label>\
            </property>\
            <property>\
              <key>6</key>\
              <label>Energetic</label>\
            </property>\
            <property>\
              <key>7</key>\
              <label>Irritable</label>\
            </property>\
            <property>\
              <key>8</key>\
              <label>Calm</label>\
            </property>\
            <property>\
              <key>9</key>\
              <label>Bored</label>\
            </property>\
            <property>\
              <key>10</key>\
              <label>Focused</label>\
            </property>\
            <property>\
              <key>11</key>\
              <label>Stressed</label>\
            </property>\
          </properties>\
          <skippable>false</skippable>\
        </prompt>\
\
        <prompt>\
          <id>feltStress</id>\
          <displayType>category</displayType>\
          <displayLabel>Stress in last two hours</displayLabel>\
          <promptText>Have you felt stress in the last two hours?</promptText>\
          <promptType>single_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>No</label>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Yes</label>\
            </property>\
          </properties>\
          <skippable>false</skippable>\
        </prompt>\
\
        <prompt>\
          <id>howStressed</id>\
          <displayType>measurement</displayType>\
        <unit>how stressed</unit>\
          <condition>feltStress == 1</condition>\
          <displayLabel>How stressed</displayLabel>\
          <promptText>How stressed were you, on a scale of 1-5?</promptText>\
          <promptType>single_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>1</label>\
              <value>1</value>\
            </property>\
            <property>\
              <key>1</key>\
              <label>2</label>\
              <value>2</value>\
            </property>\
            <property>\
              <key>2</key>\
              <label>3</label>\
              <value>3</value>\
            </property>\
            <property>\
              <key>3</key>\
              <label>4</label>\
              <value>4</value>\
            </property>\
            <property>\
              <key>4</key>\
              <label>5</label>\
              <value>5</value>\
            </property> \
           </properties>\
          <skippable>false</skippable>\
        </prompt>\
\
        <prompt>\
          <id>whatEvent</id>\
          <condition>feltStress == 1</condition>\
          <displayType>category</displayType>\
          <displayLabel>Cause</displayLabel>\
          <promptText>What was the cause of your stress?</promptText>\
          <promptType>single_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>Finances</label>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Work/School</label>\
            </property>\
            <property>\
              <key>2</key>\
              <label>Lack of control</label>\
            </property>\
            <property>\
              <key>3</key>\
              <label>Family/Relationships</label>\
            </property>\
            <property>\
              <key>4</key>\
              <label>Health</label>\
            </property>\
            <property>\
              <key>5</key>\
              <label>Traffic</label>\
            </property>\
            <property>\
              <key>6</key>\
              <label>Other</label>\
            </property>\
          </properties>\
          <skippable>false</skippable>\
        </prompt>\
    \
        <prompt>\
          <id>eatenRecently</id>\
          <displayType>category</displayType>\
          <displayLabel>Eaten since your last survey</displayLabel>\
          <promptText>Have you eaten since you completed your last diet survey?</promptText>\
          <promptType>single_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>No</label>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Yes</label>\
            </property>\
          </properties>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
\
        <prompt>\
          <id>foodWhoAteWith</id>\
          <condition>eatenRecently == 1</condition>\
          <displayType>category</displayType>\
          <displayLabel>WhoWith</displayLabel>\
          <promptText>Who did you eat with?</promptText>\
          <promptType>multi_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>Alone</label>\
              <value>0</value>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Friends</label>\
              <value>1</value>\
            </property>\
            <property>\
              <key>2</key>\
              <label>Family</label>\
              <value>2</value>\
            </property>\
            <property>\
              <key>3</key>\
              <label>Co-workers</label>\
              <value>3</value>\
            </property>\
            <property>\
              <key>4</key>\
              <label>Other</label>\
              <value>4</value>\
            </property>\
          </properties>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
\
      \
        <prompt>\
           <id>foodSnackMeal</id>\
          <condition>eatenRecently == 1</condition>\
           <displayType>category</displayType>\
           <displayLabel>Type</displayLabel>\
           <promptText>Was this a snack or a meal?</promptText>\
           <promptType>single_choice</promptType>\
\
          <properties>\
            <property>\
              <key>0</key>\
              <label>Snack</label>\
              <value>0</value>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Meal</label>\
              <value>1</value>\
            </property>\
          </properties>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
\
        <prompt>\
          <id>foodHowPrepared</id>\
          <condition>eatenRecently == 1</condition>\
          <displayType>category</displayType>\
          <displayLabel>HowPrepared</displayLabel>\
          <promptText>How was this food prepared?</promptText>\
          <promptType>multi_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>Restaurant</label>\
              <value>0</value>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Fast food</label>\
              <value>1</value>\
            </property>\
            <property>\
              <key>2</key>\
              <label>Home made</label>\
              <value>2</value>\
            </property>\
            <property>\
              <key>3</key>\
              <label>Prepared (i.e., deli, salad bar) </label>\
              <value>3</value>\
            </property>\
            <property>\
              <key>4</key>\
              <label>Frozen dinner</label>\
              <value>4</value>\
            </property>\
            <property>\
              <key>5</key>\
              <label>Other </label>\
              <value>5</value>\
            </property>\
          </properties>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
\
        <prompt>\
          <id>foodQuality</id>\
          <condition>eatenRecently == 1</condition>\
          <displayType>category</displayType>\
          <displayLabel>NutritionalQuality</displayLabel>\
          <promptText>Rate the nutritional quality of this meal?</promptText>\
          <promptType>single_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>Low</label>\
              <value>0</value>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Medium</label>\
              <value>1</value>\
            </property>\
            <property>\
              <key>2</key>\
              <label>High</label>\
              <value>2</value>\
            </property>\
          </properties>\
          <skippable>false</skippable>\
        </prompt>\
        \
        \
        <prompt>\
          <id>foodHowHungry</id>\
          <condition>eatenRecently == 1</condition>\
          <displayType>count</displayType>\
          <displayLabel>Hunger</displayLabel>\
          <unit>hunger amount</unit>\
          <promptText>How hungry were you before eating?</promptText>\
          <promptType>single_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>Very</label>\
              <value>0</value>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Moderately</label>\
              <value>1</value>\
            </property>\
            <property>\
              <key>2</key>\
              <label>Slightly</label>\
              <value>2</value>\
            </property>\
            <property>\
              <key>3</key>\
              <label>Not at all</label>\
              <value>3</value>\
            </property>\
          </properties>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
\
\
        <prompt>\
          <id>foodHowMuch</id>\
          <condition>eatenRecently == 1</condition>\
          <displayType>category</displayType>\
          <displayLabel>HowMuch</displayLabel>\
          <promptText>How much did you eat?</promptText>\
          <promptType>single_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>Too little / not enough</label>\
              <value>0</value>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Just right</label>\
              <value>1</value>\
            </property>\
            <property>\
              <key>2</key>\
              <label>Too much</label>\
              <value>2</value>\
            </property>\
          </properties>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
\
      </contentList>\
    \
    </survey>\
\
      <survey>\
      <id>exerciseAndActivity</id>\
      <title>Exercise and Activity</title>\
      <description>This is the exercise and activity survey.</description>\
      <submitText>Please charge your phone tonight. </submitText>\
      <showSummary>false</showSummary>\
      <anytime>true</anytime>\
    \
      <contentList>\
\
        <prompt>\
          <id>didYouExercise</id>\
          <displayType>category</displayType>\
          <displayLabel>Have you exercised today</displayLabel>\
          <promptText>Have you exercised today?</promptText>\
          <promptType>single_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>No</label>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Yes</label>\
            </property>\
          </properties>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
\
        <prompt>\
          <id>planningToExercise</id>\
          <displayType>category</displayType>\
          <displayLabel>Were you planning to exercise today</displayLabel>\
          <promptText>Were you planning to exercise today?</promptText>\
          <promptType>single_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>No</label>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Yes</label>\
            </property>\
          </properties>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
\
        <prompt>\
          <id>whyNotExercise</id>\
          <condition>didYouExercise == 0 and planningToExercise == 1</condition>\
          <displayType>category</displayType>\
          <displayLabel>Disrupted plan</displayLabel>\
          <promptText>What prevented you from exercising as planned?</promptText>\
          <promptType>single_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>Child care</label>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Work</label>\
            </property>\
            <property>\
              <key>2</key>\
              <label>Personal needs</label>\
            </property>\
            <property>\
              <key>3</key>\
              <label>Household responsibilities</label>\
            </property>\
            <property>\
              <key>4</key>\
              <label>Injured, in pain</label>\
            </property>\
            <property>\
              <key>5</key>\
              <label>Social function</label>\
            </property>\
            <property>\
              <key>6</key>\
              <label>Medical emergency</label>\
            </property>\
            <property>\
              <key>7</key>\
              <label>No energy</label>\
            </property>\
            <property>\
              <key>8</key>\
              <label>Other</label>\
            </property>\
          </properties>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
\
        <prompt>\
          <id>timeSpentLight</id>\
          <condition>didYouExercise == 1</condition>\
          <displayType>count</displayType>\
          <displayLabel>Time light exercise</displayLabel>\
          <promptText>How many minutes of light exercise did you do today? (No increase in breathing or heart rate.)</promptText>\
          <promptType>number</promptType>\
          <properties>\
            <property>\
              <key>min</key>\
              <label>0</label>\
            </property>\
            <property>\
              <key>max</key>\
              <label>300</label>\
            </property>\
          </properties>\
          <default>15</default>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
\
        <prompt>\
          <id>timeSpentModerate</id>\
          <condition>didYouExercise == 1</condition>\
          <displayType>count</displayType>\
          <displayLabel>Time moderate exercise</displayLabel>\
          <promptText>How many minutes of moderate exercise did you do today? (Mild increase in breathing or heart rate.)</promptText>\
          <promptType>number</promptType>\
          <properties>\
            <property>\
              <key>min</key>\
              <label>0</label>\
            </property>\
            <property>\
              <key>max</key>\
              <label>300</label>\
            </property>\
          </properties>\
          <default>15</default>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
\
        <prompt>\
          <id>timeSpentVigorous</id>\
          <condition>didYouExercise == 1</condition>\
          <displayType>count</displayType>\
          <displayLabel>Time vigorous exercise</displayLabel>\
          <promptText>How many minutes of vigorous exercise did you do today? (Significant increase in breathing or heart rate.)</promptText>\
          <promptType>number</promptType>\
          <properties>\
            <property>\
              <key>min</key>\
              <label>0</label>\
            </property>\
            <property>\
              <key>max</key>\
              <label>300</label>\
            </property>\
          </properties>\
          <default>15</default>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
\
        <prompt>\
          <id>whoWith</id>\
          <condition>didYouExercise == 1</condition>\
          <displayType>category</displayType>\
          <displayLabel>Who did you exercise with</displayLabel>\
          <promptText>Who did you do this exercise with?</promptText>\
          <promptType>multi_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>Alone</label>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Friends</label>\
            </property>\
            <property>\
              <key>2</key>\
              <label>Child</label>\
            </property>\
            <property>\
              <key>3</key>\
              <label>Partner/Spouse</label>\
            </property>\
            <property>\
              <key>4</key>\
              <label>Co-workers</label>\
            </property>\
            <property>\
              <key>5</key>\
              <label>Class or group</label>\
            </property>\
            <property>\
              <key>6</key>\
              <label>Other</label>\
            </property>\
          </properties>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
\
        <prompt>\
          <id>physicalActivity</id>\
          <displayType>category</displayType>\
          <displayLabel>What other kinds of physical activity did you do today</displayLabel>\
          <promptText>What other kinds of physical activity did you do today?</promptText>\
          <promptType>multi_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>None</label>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Housework / Gardening</label>\
            </property>\
            <property>\
              <key>2</key>\
              <label>Carrying light loads</label>\
            </property>\
            <property>\
              <key>3</key>\
              <label>Carrying heavy loads</label>\
            </property>\
            <property>\
              <key>4</key>\
              <label>Active play with children</label>\
            </property>\
            <property>\
              <key>5</key>\
              <label>Walking</label>\
            </property>\
            <property>\
              <key>6</key>\
              <label>Other</label>\
            </property>\
          </properties>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
        \
        <prompt>\
          <id>timeForYourself</id>\
          <displayType>category</displayType>\
          <displayLabel>Time to yourself today</displayLabel>\
          <promptText>How much time did you have to yourself today?</promptText>\
          <promptType>single_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>None</label>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Less than 10 minutes</label>\
            </property>\
            <property>\
              <key>2</key>\
              <label> 10 to 30 minutes </label>\
            </property>\
            <property>\
              <key>3</key>\
              <label> 1 hour </label>\
            </property>\
            <property>\
              <key>4</key>\
              <label> 2 hours </label>\
            </property>\
            <property>\
              <key>5</key>\
              <label> More than 2 hours </label>\
            </property>\
          </properties>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
\
\
        <prompt>\
          <id>stressToday</id>\
          <displayType>count</displayType>\
          <displayLabel>Rate stress today</displayLabel>\
          <promptText>How stressful was your day today, in general, on a scale of 1-5?</promptText>\
          <promptType>number</promptType>\
          <properties>\
            <property>\
              <key>min</key>\
              <label>1</label>\
            </property>\
            <property>\
              <key>max</key>\
              <label>5</label>\
            </property>\
          </properties>\
          <default>3</default>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
\
        <prompt>\
          <id>rateEating</id>\
          <displayType>category</displayType>\
          <displayLabel>Rate your eating</displayLabel>\
          <promptText>How healthy would you rate your eating today in terms of both quantity and quality, compared to your typical day?</promptText>\
          <promptType>single_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label> Less healthy than usual </label>\
            </property>\
            <property>\
              <key>1</key>\
              <label> Typical </label>\
            </property>\
            <property>\
              <key>2</key>\
              <label> Healthier than usual </label>\
            </property>\
          </properties>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
    \
      </contentList>\
    \
    </survey>\
\
    <survey>\
      <id>foodButton</id>\
      <title>Food</title>\
      <description>Not displayed</description>\
      <submitText>Not displayed</submitText>\
      <showSummary>false</showSummary>\
      <anytime>true</anytime>\
    \
      <contentList>\
      \
        <prompt>\
          <id>foodPhoto</id>\
          <displayType>event</displayType>\
          <displayLabel>photo</displayLabel>\
          <promptText>Take a picture of your food</promptText>\
          <abbreviatedText>abbreviatedText must not be empty if showSummary on its parent survey is true.</abbreviatedText>\
          <promptType>photo</promptType>\
          <properties>\
            <property>\
              <key>res</key>\
              <label>720</label>\
            </property>\
          </properties>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
\
        <prompt>\
          <id>foodTag</id>\
          <displayType>category</displayType>\
          <displayLabel>Type</displayLabel>\
          <promptText>Tag this image</promptText>\
          <promptType>multi_choice</promptType>\
          <properties>\
            <property>\
              <key>0</key>\
              <label>Snack</label>\
              <value>0</value>\
            </property>\
            <property>\
              <key>1</key>\
              <label>Meal</label>\
              <value>1</value>\
            </property>\
            <property>\
              <key>2</key>\
              <label>Planned</label>\
              <value>2</value>\
            </property>\
            <property>\
              <key>3</key>\
              <label>Unplanned</label>\
              <value>3</value>\
            </property>\
          </properties>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
        \
      </contentList>\
    \
    </survey>\
\
    <survey>\
      <id>sleep</id>\
      <title>Sleep</title>\
      <description>This is the sleep survey.</description>\
      <submitText>Thank you for submitting this survey.</submitText>\
      <showSummary>false</showSummary>\
      <anytime>true</anytime>\
    \
      <contentList>\
      \
        <prompt>\
          <id>hoursOfSleep</id>\
          <displayType>count</displayType>\
          <displayLabel>Hours of Sleep</displayLabel>\
          <promptText>How many hours in total did you sleep last night?</promptText>\
          <promptType>number</promptType>\
          <properties>\
            <property>\
              <key>min</key>\
              <label>0</label>\
            </property>\
            <property>\
              <key>max</key>\
              <label>24</label>\
            </property>\
          </properties>\
          <skippable>true</skippable>\
          <skipLabel>skip</skipLabel>\
        </prompt>\
    \
      </contentList>\
    \
    </survey>\
\
    <survey>\
      <id>stressButton</id>\
      <title>Stress</title>\
      <description>Not displayed</description>\
      <submitText>Not displayed</submitText>\
      <showSummary>false</showSummary>\
      <anytime>true</anytime>\
    \
      <contentList>\
      \
        <prompt>\
          <id>stress</id>\
          <displayType>metadata</displayType>\
          <displayLabel>Stress</displayLabel>\
                    \
          <promptText>Not displayed</promptText>\
          <promptType>text</promptType>\
          <properties>\
            <property>\
              <key>min</key>\
              <label>1</label>\
            </property>\
            <property>\
              <key>max</key>\
              <label>1</label>\
            </property>\
          </properties>\
          <skippable>false</skippable>\
          <default>*</default>\
        </prompt>\
        \
      </contentList>\
    \
    </survey>\
  </surveys>\
</campaign>';
// }}} 
   this.xml = null;  
   this.loadDefaultCampaign = function() { 
      this.xml = this.rewriteXML(this.defaultCampaignXML);
      return this.xml;
   };
   this.loadCampaignFromURL = function() { 
      this.xml = this.rewriteXML(this.defaultCampaignXML);
      return this.xml;
   }; 
   this.rewriteXML = function (xml) {
      xml = xml.replace(/<title>/ig, "<title_t>");
      xml = xml.replace(/<\/title>/gi, "</title_t>");
      return xml;
   } 
} 


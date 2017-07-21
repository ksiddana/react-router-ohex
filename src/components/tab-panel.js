import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Countdown from './countdown/countdown'
import ReminderPro from './reminder-pro/reminder-pro';
import OHEx from './food_list';
import GoalCoach from "./goal-coach/goal-coach";
import Github from "./github/github";

const TabComponent = () => {
  return (
    <Tabs>
      <TabList>
        <Tab className="btn btn-info">OHEx</Tab>
        <Tab className="btn btn-info">Countdown</Tab>
        <Tab className="btn btn-info">Reminder Pro</Tab>
        <Tab className="btn btn-info">Goal Coach</Tab>
        <Tab className="btn btn-info">Github</Tab>
      </TabList>

      <TabPanel>
        <OHEx />
      </TabPanel>

      <TabPanel>
        <Countdown />
      </TabPanel>

      <TabPanel>
        <ReminderPro />
      </TabPanel>

      <TabPanel>
        <GoalCoach />
      </TabPanel>

      <TabPanel>
        <Github />
      </TabPanel>
    </Tabs>
  );
}

export default TabComponent;

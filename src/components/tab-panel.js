import React from 'React';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Countdown from './countdown/countdown'
import ReminderPro from './reminder-pro/reminder-pro';
import OHEx from './food_list';

const TabComponent = () => {
  return (
    <Tabs>
      <TabList>
        <Tab className="btn btn-info">OHEx</Tab>
        <Tab className="btn btn-info">Countdown</Tab>
        <Tab className="btn btn-info">Reminder Pro</Tab>
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
    </Tabs>
  );
}

export default TabComponent;

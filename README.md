# 05 Third-Party APIs: Work Day Scheduler

# Overview

* I was able to dynamically create the time blocks and buttons, but I got extremely stuck on the input and localStorage aspect of the page.
 * I did have some trouble with the display date at first, as I was setting it as a variable. In doing so it would pull only the date and time of when the page was first loaded, and would not update in real-time. 
 
## Acceptance Criteria

```
<!-- GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar -->
<!-- WHEN I scroll down
THEN I am presented with time blocks for standard business hours -->
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
<!-- WHEN I click into a time block
THEN I can enter an event -->
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```


 [image1](Screenshot 2020-10-07 212947.png)
 [image2](C:\Users\demps\gt-pt\homework\DailyPlanner3rdPartyAPIs\Screenshot 2020-10-07 213009.png)
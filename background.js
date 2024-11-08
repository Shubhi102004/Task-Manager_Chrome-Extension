// // chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
// //     if (message.action === "createAlarm") {
// //       const dueDate = new Date(message.dueDate);
// //       chrome.alarms.create(message.title, { when: dueDate.getTime() });
// //     }
// //   });
  
// //   chrome.alarms.onAlarm.addListener(function (alarm) {
// //     chrome.notifications.create({
// //       type: "basic",
// //       iconUrl: chrome.runtime.getURL("icon.png"),
// //       title: "Task Reminder",
// //       message: alarm.name,
// //     });
// //   });
  
  
//   chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message.action === "createAlarm") {
//         const dueDate = new Date(message.dueDate);
//         chrome.alarms.create(message.title, { when: dueDate.getTime() });
//     }
// });

// chrome.alarms.onAlarm.addListener(function (alarm) {
//     chrome.notifications.create({
//         type: "basic",
//         iconUrl: chrome.runtime.getURL("icon.png"),
//         title: "Task Reminder",
//         message: alarm.name,
//     });
// });

// background.js

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "createAlarm") {
        const dueDate = new Date(message.dueDate);
        chrome.alarms.create(message.title, { when: dueDate.getTime() });
    }
});

chrome.alarms.onAlarm.addListener(function (alarm) {
    chrome.notifications.create({
        type: "basic",
        iconUrl: chrome.runtime.getURL("icon.png"),
        title: "Task Reminder",
        message: alarm.name,
    });
});

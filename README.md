# mail-exercise

## Quickstart
1. `npm install`
2. `npm start`
3. Navigate to `http://localhost:8080/` in your browser

## Features
- Emails are displayed in two sections, read and unread.
- Emails are sorted by date.
- Emails are not retrieved via the network, because the endpoint lacks CORS support. Instead, a stubbed response with the same format is used.
- To simulate updates, local state is used. Click on the eye icons associated with the email to mark each as "read" and "unread".
Refreshing the page will undo the changes, since the state is only stored locally.
- Each email entry is checked for data integrity. Email entries that are deemed malformed are not displayed. An error is also logged.
- Some components are unit tested. The test files can be found alongside the original modules. The tests can be run with `npm test`.

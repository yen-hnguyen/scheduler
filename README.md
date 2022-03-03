# Interview Scheduler

Interview Scheduler is a single-page application (SPA) built with React that allows users to book technical interviews between students and interviewers.
The client application communicates to an API server over HTTP using Axios to make the calls then store data in a database. This application was built using different development enviroments, including Storybook, Jest and Webpack Dev Server

## Features

✨ &nbsp;Student can create, edit and delete appointments <br/>
✨ &nbsp;When creating new appointment, student can enter any name and choose interviewers from a predefined list <br/>
✨ &nbsp;The remaining appointments will be dynamically updated when student create new or delete existing appointment <br/>

---

## Final Product

### Main Page

!["Main Page](/public/screenshots/main-page.gif)

### Create New Appointment

!["Scheduler - Create Appointment"](/public/screenshots/create-appointment.gif)

### Edit Existing Appoinment

!["Scheduler - Edit Appoinemnt"](/public/screenshots/edit-appointment.gif)

### Delete Existing Appointment

!["Scheduler - Delete Appointment"](/public/screenshots/delete-appoinment.gif)

## Dependencies

- axios
- classnames
- normalize.css
- react
- react-dom
- react-scripts

## Setup

Install dependencies with `npm install`.<br/>
Fork and clone [Scheduler API](https://github.com/lighthouse-labs/scheduler-api) server <br/>
**NOTE**: Run both client and server at the same time

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

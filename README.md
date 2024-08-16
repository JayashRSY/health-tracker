# HealthTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# HealthTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [Services Overview](#services-overview)
- [Charts and Graphs](#charts-and-graphs)
- [Styling](#styling)
- [Neumorphism Design](#neumorphism-design)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The **Workout Tracker Application** is a modern web application built with Angular and Tailwind CSS. The app allows users to track their workouts, visualize their progress through charts, and manage user data effectively. The UI embraces neumorphism and modern design principles to provide a clean and engaging user experience.

## Features

- **User Management:** Create, update, and delete users.
- **Workout Tracking:** Add multiple workouts for each user, including the type and duration.
- **Charts & Graphs:** Visualize workout data with interactive charts using PrimeNG and Chart.js.
- **Responsive Design:** Fully responsive and optimized for all devices.
- **Neumorphism Design:** Soft and modern UI with subtle shadows and rounded elements.

## Technologies Used

- **Frontend:**

  - Angular
  - TypeScript
  - Tailwind CSS
  - Angular Material
  - PrimeNG
  - Chart.js

- **Backend:**
  - Angular Service for localStorage (client-side storage)

## Installation

### Clone the Repository

To get started, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/JayshRSY/workout-tracker.git
cd workout-tracker
npm install
ng serve
```

## Usage

### Adding a User

1. Navigate to the **"Add User"** page.
2. Enter the user’s name and add workout activities by selecting the type and duration.
3. Click **"Create User"** to save the user and their workouts.

### Viewing Users and Workouts

1. Navigate to the **"User List"** page to see all users.
2. Click on a user to view their workout activities in a chart.

### Viewing Activity

1. Navigate to the **"Activity"** page to see a list of users and their activities.
2. Select a user to view their workout data on the graph.

## Components Overview

### Header Component

- Displays navigation links with neumorphic design.
- Allows quick navigation between different sections of the app.

### User Form Component

- Handles the creation of users and their associated workouts.
- Utilizes Angular Material for form controls and validation.

### User List Component

- Displays a list of all users.
- Allows selection of users to visualize their workout data in charts.

### Workout Chart Component

- Displays workout data for the selected user.
- Uses PrimeNG and Chart.js for rendering interactive charts.

## Services Overview

### User Service

- Handles all operations related to user data, such as adding, retrieving, and updating users.
- Stores user data locally using localStorage.

## Charts and Graphs

- **PrimeNG & Chart.js**: The workout data is visualized using bar charts where the x-axis represents the workout types and the y-axis shows the duration in minutes.
- **Interactivity**: Users can select different users to dynamically update the chart with the corresponding workout data.

## Styling

- **Tailwind CSS**: The application uses Tailwind CSS for utility-first styling, making it easy to create responsive and visually appealing layouts.
- **Angular Material**: Provides a consistent UI experience across the application with pre-built components.

## Neumorphism Design

The UI employs a soft, subtle neumorphism design, with shadows and rounded corners that give a clean, modern look to the application.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

This README provides a comprehensive guide for anyone who wants to understand, install, and use your Workout Tracker Application. Feel free to adjust sections to fit your specific project needs.

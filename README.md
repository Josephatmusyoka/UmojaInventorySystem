# Umoja Inventory Management System

## Overview

The Umoja Inventory Management System is a comprehensive application designed to manage and track inventory, users, and transactions. It features a user-friendly interface with functionality for registration, login, and detailed dashboards. This application utilizes Flask for the backend, with HTML, CSS, and JavaScript for the frontend.

## Features

- **Home Page:** Overview of Umoja Collections with mission, vision, and team information.
- **Login & Registration:** Secure user authentication and registration.
- **Dashboard:** Overview of inventory and sales reports.
- **Forgot Password:** Allows users to reset their password.
- **Items Page:** Displays and manages stock items.
- **Reports Page:** Shows sales and transaction reports.
- **User Management:** Manage users, customers, and suppliers.
- **Transaction Page:** Handles transactions and inventory updates.

## Project Structure

- **static/**
  - **css/**: Contains CSS files for styling the application.
  - **js/**: Contains JavaScript files for dynamic functionalities.
  - **images/**: Contains image files used in the application.

- **templates/**: Contains HTML files for different pages in the application.
  - **home.html**: The landing page of the application.
  - **dashboard.html**: The main dashboard for logged-in users.
  - **login.html**: Login page for user authentication.
  - **register.html**: Registration page for new users.
  - **forgot_password.html**: Page to reset the password.

- **database/**: Contains the SQLite database file.

- **app.py**: The main Flask application file.

- **requirements.txt**: Lists Python dependencies required for the project.

- **.gitignore**: Specifies files and directories to be ignored by Git.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd umoja_inventory_system

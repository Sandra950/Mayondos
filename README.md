Mayondo Project Documentation

---

Project Name: Mayondo
Author: Sandramags1
GitHub Repository: [https://github.com/Sandra950/Mayondo](https://github.com/Sandra950/Mayondo)
Database: Local Storage (browser-based)
Technologies: HTML, CSS, JavaScript, Bootstrap

---

1. Project Overview
   Mayondo is a simple web application for user registration and login with a dashboard displaying all registered users.
   It allows users to sign up and stores their information securely in the browser's localStorage. Existing users can log in to access the dashboard.
   The project features a brown-themed UI, responsive design, and animated water-wave effects.

---

2. Features
   • User Registration: Collects full name, email, username, and password.
   • Login Authentication: Validates users against stored credentials in localStorage.
   • Dashboard: Displays all registered users in a styled, responsive table.
   • Session Management: Uses 'loggedInUser' in localStorage to protect dashboard access.
   • Responsive Design: Mobile-friendly using Bootstrap.
   • Visual Effects: Animated water-wave background for login, signup, and dashboard.
   • Brown-Themed UI: Consistent color palette for all pages with custom buttons.

---

3. Data Storage
   • All user data is stored in the browser’s localStorage.
   • Each user object is saved with the username as the key:
   {
   "fullname": "Sandra Mags",
   "email": "[sandra@example.com](mailto:sandra@example.com)",
   "password": "123456"
   }
   • Current logged-in user is stored under the key 'loggedInUser'.

---

4. Project Structure
   Mayondo/
   ├── index.html           # Home page (optional)
   ├── login.html           # Login form
   ├── signup.html          # Registration form
   ├── dashboard.html       # Dashboard displaying registered users
   ├── login.css            # Styles for login page
   ├── signup.css           # Styles for signup page
   ├── dashboard.css        # Styles for dashboard page
   ├── login.js             # Login logic & water-wave animation
   ├── signup.js            # Signup logic & water-wave animation
   ├── dashboard.js         # Dashboard logic & water-wave animation
   ├── assets/              # Optional: images, icons, fonts
   └── README.md

---

5. How to Use / Run Locally
6. Clone the GitHub repository:
   git clone [https://github.com/Sandra950/Mayondo.git](https://github.com/Sandra950/Mayondo.git)
7. Open the project folder in your favorite code editor.
8. Open any HTML file in a browser (e.g., login.html, signup.html, dashboard.html).
9. Sign up a new user via signup.html.
10. Log in using the credentials to access dashboard.html.

---

6. GitHub Upload Instructions
7. Open terminal and navigate to your project folder.
8. Initialize Git (if not already): git init
9. Add remote repository: git remote add origin [https://github.com/Sandra950/Mayondo.git](https://github.com/Sandra950/Mayondo.git)
10. Add all files: git add .
11. Commit changes: git commit -m "Updated project: localStorage auth, dashboard, brown theme, waves animation"
12. Push to GitHub: git branch -M main
    git push -u origin main

> To completely overwrite the repo, use: git push origin main --force

---

7. Notes
   • Data Persistence: All users are stored in browser localStorage; clearing the browser clears the users.
   • Password Storage: Passwords are stored in plain text in localStorage (for learning/demo purposes).
   • Dashboard Protection: Only logged-in users can access dashboard.html. If no user is logged in, the page redirects to login.html.
   • Responsive Design: Works well on desktops, tablets, and mobile devices.
   • UI Theme: Consistent brown gradient, white containers, and animated waves.

---

End of Documentation

# Student Management (MERN CRUD)

Simple MERN stack application to manage student records 

## 1. Overview

This web app allows a user to perform full CRUD operations on students:

- **Create** – Add a new student
- **Read** – View list of all students in a table
- **Update** – Edit an existing student's data
- **Delete** – Remove a student with confirmation

Each student record contains:

- `name` (String)
- `email` (String)
- `age` (Number)
- `course` (String)

The UI shows:

- An **Add Student** form
- A **Student List** table with: **ID, Name, Email, Age, Course, Actions (Edit / Delete)**

---

## 2. Tech Stack

- **Frontend:** React (Create React App), Axios, React Hooks (`useState`, `useEffect`)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Other:** CORS, dotenv

---

## 3. Project Structure

```text
studentmernapp/
  backend/
    models/
      Student.js
    routes/
      studentRoutes.js
    server.js
    package.json
  frontend/
    src/
      api.js
      App.js
      App.css
      components/
        AddStudent.jsx
        EditStudent.jsx
        StudentList.jsx
    package.json
  README.md

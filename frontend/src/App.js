import { useEffect, useState } from 'react';
import api from './api';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import EditStudent from './components/EditStudent';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await api.get('/students');
      setStudents(res.data);
    } catch (err) {
      console.error('Error fetching students:', err);
      alert('Failed to fetch students');
    }
  };

  const handleStudentAdded = async (studentData) => {
    try {
      await api.post('/students', studentData);
      await fetchStudents();
      alert('Student added successfully!');
    } catch (err) {
      console.error('Error adding student:', err);
      alert('Failed to add student');
    }
  };

  const handleEditClick = (student) => {
    setSelectedStudent(student);
  };

  const handleStudentUpdated = async (id, updatedData) => {
    try {
      await api.put(`/students/${id}`, updatedData);
      await fetchStudents();
      setSelectedStudent(null);
      alert('Student updated successfully!');
    } catch (err) {
      console.error('Error updating student:', err);
      alert('Failed to update student');
    }
  };

  const handleDeleteClick = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (!confirmDelete) return;

    try {
      await api.delete(`/students/${id}`);
      await fetchStudents();
      alert('Student deleted successfully!');
    } catch (err) {
      console.error('Error deleting student:', err);
      alert('Failed to delete student');
    }
  };

  const handleCancelEdit = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="container">
      <h1>Student Management (MERN CRUD)</h1>

      <div className="grid">
        <AddStudent onStudentAdded={handleStudentAdded} />
        <EditStudent
          selectedStudent={selectedStudent}
          onStudentUpdated={handleStudentUpdated}
          onCancel={handleCancelEdit}
        />
      </div>

      <StudentList
        students={students}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
    </div>
  );
}

export default App;

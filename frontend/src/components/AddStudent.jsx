// frontend/src/components/AddStudent.jsx
import { useState } from 'react';

function AddStudent({ onStudentAdded }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.age || !form.course) {
      alert('Please fill all fields');
      return;
    }
    await onStudentAdded({
      ...form,
      age: Number(form.age),
    });
    setForm({
      name: '',
      email: '',
      age: '',
      course: '',
    });
  };

  return (
    <div className="card">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>

        <div className="form-row">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <div className="form-row">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Enter age"
          />
        </div>

        <div className="form-row">
          <label>Course:</label>
          <input
            type="text"
            name="course"
            value={form.course}
            onChange={handleChange}
            placeholder="Enter course"
          />
        </div>

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;

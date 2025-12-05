// frontend/src/components/EditStudent.jsx
import { useEffect, useState } from 'react';

function EditStudent({ selectedStudent, onStudentUpdated, onCancel }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    course: '',
  });

  useEffect(() => {
    if (selectedStudent) {
      setForm({
        name: selectedStudent.name || '',
        email: selectedStudent.email || '',
        age: selectedStudent.age || '',
        course: selectedStudent.course || '',
      });
    }
  }, [selectedStudent]);

  if (!selectedStudent) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onStudentUpdated(selectedStudent._id, {
      ...form,
      age: Number(form.age),
    });
  };

  return (
    <div className="card">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <label>Name:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Age:</label>
          <input type="number" name="age" value={form.age} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Course:</label>
          <input type="text" name="course" value={form.course} onChange={handleChange} />
        </div>

        <button type="submit">Save Changes</button>
        <button
          type="button"
          onClick={onCancel}
          style={{ marginLeft: '8px', backgroundColor: '#9e9e9e', color: '#fff' }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditStudent;

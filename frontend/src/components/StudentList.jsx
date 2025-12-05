// frontend/src/components/StudentList.jsx

function StudentList({ students, onEditClick, onDeleteClick }) {
  return (
    <div className="card">
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <table className="students-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s._id}>
                <td>{s._id}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.age}</td>
                <td>{s.course}</td>
                <td>
                  <button onClick={() => onEditClick(s)}>Edit</button>
                  <button
                    onClick={() => onDeleteClick(s._id)}
                    style={{ marginLeft: '8px', backgroundColor: '#f44336', color: '#fff' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import api from "../api/api";
const Get = () => {
  const [students, setStudents] = useState([]);
  const retrieve = async () => {
    const response = await api.get("students");
    return response.data;
  };
  const getStudents = async () => {
    const students = await retrieve();
    setStudents(students);
  };
  useEffect(() => {
    getStudents();
  }, []);
  const handleDelete = (id) => {
    api.delete(`students/${id}`).then(() => {
      getStudents();
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="student-table">
        <div className="title">
          <h2>Student Management</h2>
        </div>
        <div className="btn-table">
          <Link to="/add">
            <button className="add-btn">+ Add Student</button>
          </Link>
        </div>
        <table className="table">
          <thead>
            <th>STT</th>
            <th>Fristname</th>
            <th>Lastname</th>
            <th>Student Code</th>
            <th></th>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.studentCode}</td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <DeleteOutlined
                    onClick={() => {
                      handleDelete(student.id);
                    }}
                  />
                  <Link to={`/student/${student.id}/edit`}>
                    <EditOutlined />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Get;

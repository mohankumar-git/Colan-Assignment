import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StudentsList = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/students");
      if (!response.ok) {
        throw new Error("Failed to fetch student data");
      }
      const data = await response.json();
      setStudentData(data);
    } catch (error) {
      console.error("Error fetching student data:", error.message);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [studentData]);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/students/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete student");
      }

      setStudentData((prevStudents) =>
        prevStudents.filter((student) => student.id !== id)
      );

      console.log(`Student with ID ${id} deleted successfully`);
    } catch (error) {
      console.error("Error deleting student:", error.message);
    }
  };

  return (
    <div className="my-4">
      <h2 className="font-weight-bold text-center">Student List</h2>
      <ul className="d-flex flex-column align-items-center">
        {studentData.map((student, index) => (
          <li
            key={index}
            className="d-flex gap-3 flex-wrap align-items-center justify-start my-2"
          >
            <p>
              {student.firstName}
              {student.lastName}
            </p>
            <p>{student.email}</p>
            <button
              className="btn btn-info"
              onClick={() => handleEdit(student._id)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(student._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;

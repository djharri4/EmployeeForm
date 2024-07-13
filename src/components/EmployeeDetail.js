import React from 'react';
import { useParams } from 'react-router-dom';
import './EmployeeForm.css';

function EmployeeDetail({ employees }) {
    const { employeeId } = useParams();
    const employee = employees.find(emp => emp.email === employeeId);

    if (!employee) {
        return <div>Employee not found</div>;
    }

    return (
        <div className="employee-detail">
            <h1>{employee.name}</h1>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Job Title:</strong> {employee.title}</p>
            <p><strong>Department:</strong> {employee.department}</p>
        </div>
    );
}

export default EmployeeDetail;

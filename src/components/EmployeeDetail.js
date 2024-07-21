import React from 'react';
import { useParams } from 'react-router-dom';

const EmployeeDetail = ({ employees }) => {
    const { employeeId } = useParams();
    const employee = employees.find(emp => emp.email === employeeId) || JSON.parse(localStorage.getItem('employees')).find(emp => emp.email === employeeId);

    if (!employee) {
        return <div>Employee not found</div>;
    }

    return (
        <div className="employee-detail">
            <h2>{employee.name}</h2>
            <p>Email: {employee.email}</p>
            <p>Title: {employee.title}</p>
            <p>Department: {employee.department}</p>
        </div>
    );
};

export default EmployeeDetail;

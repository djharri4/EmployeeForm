import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeList({ employees }) {
    if (!employees || employees.length === 0) {
        return <div>No employees found.</div>;
    }

    return (
        <div className="employee-list">
            <h1>Employee List</h1>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.email}>
                        <Link to={`/employees/${employee.email}`}>
                            {employee.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;

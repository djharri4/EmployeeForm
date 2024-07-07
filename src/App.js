import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';

function App() {
    const [employees, setEmployees] = useState([]);

    
    const addEmployee = (employee) => {
        const updatedEmployees = [...employees, employee];
        setEmployees(updatedEmployees);
        saveData(updatedEmployees);
    };

    const saveData = (data) => {
        localStorage.setItem('employees', JSON.stringify(data));
    };

    useEffect(() => {
        const data = localStorage.getItem('employees');
        if (data) {
            setEmployees(JSON.parse(data));
        }
    }, []);

    return (
        <div className="App">
            <EmployeeForm addEmployee={addEmployee} />
        </div>
    );
}

export default App;


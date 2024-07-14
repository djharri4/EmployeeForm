import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';

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
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <EmployeeForm addEmployee={addEmployee} />
                                <EmployeeList employees={employees} />
                            </>
                        }
                    />
                    <Route path="/employees/:employeeId" element={<EmployeeDetail employees={employees} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

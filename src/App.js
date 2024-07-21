import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; 
import Home from './components/home.js'; 
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';
import About from './components/About';

function App() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        setEmployees(storedEmployees);
    }, []);

    const addEmployee = (employee) => {
        const updatedEmployees = [...employees, employee];
        setEmployees(updatedEmployees);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    };

    return (
        <Router>
            <div className="App">
                <nav className="navbar">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employee-form" element={<EmployeeForm addEmployee={addEmployee} />} />
                    <Route path="/employees" element={<EmployeeList employees={employees} />} />
                    <Route path="/employees/:employeeId" element={<EmployeeDetail employees={employees} />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

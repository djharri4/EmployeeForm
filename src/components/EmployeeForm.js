import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            title: '',
            department: ''
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            name: '',
            email: '',
            title: '',
            department: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                    />
                </div>
                <div>
                    <label>Job Title:</label>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name="title"
                    />
                </div>
                <div>
                    <label>Department:</label>
                    <input
                        type="text"
                        value={this.state.department}
                        onChange={this.handleInputChange}
                        name="department"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default EmployeeForm;
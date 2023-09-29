import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { ProductContext } from '../App';
import './login.css'; // Import your CSS file

function RegistrationForm() {
    const { book, isLoading, error } = useContext(ProductContext);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // Add password state
    const [repassword, setRePassword] = useState('');
    
    console.log(book);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
        console.log('First Name:', firstname);
        console.log('Last Name:', lastname);
        console.log('User Name:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Re-entered Password:', repassword);
    };

    return (
        <div className="wrapper">
            <form className="form-signin" onSubmit={handleSubmit}>
                <h2 className="form-signin-heading">Please Register</h2>
                <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    required
                    autoFocus
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    required
              
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                    required
               
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                    required
         
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Type password again"
                    required
                    value={repassword}
                    onChange={(e) => setRePassword(e.target.value)}
                />
                <br/>
                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                >
                    Registration
                </button>
                <div style={{width:"100%",display:'flex', paddingTop:'10px', justifyContent:'flex-end'}}><p>Already have an account? <Link to="/login">login</Link></p></div>
            </form>
            
        </div>
    );
}

export default RegistrationForm;

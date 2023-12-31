/**
 * @Reference https://www.geeksforgeeks.org/how-to-develop-user-registration-form-in-reactjs/
 */

import { useState } from 'react';
import api from '../../api/axiosConfig';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './Register.css';

export default function Register() {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message,setMessage] = useState("");
 
    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
 
    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
 
    // Handling the form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setMessage("Email and password fields are required!");
        } else {
            const response = await api.post('api/v1/users',{emailAddress:email,password:password});
            if(response.data == 1){
                setEmail('');
                setPassword('');
                setMessage("Account created!");
            }else{
                setMessage("An error occured, Please try again!");
            }
        }
    };
 
    // Showing success message
    const successMessage = () => {
        setEmail('');
        setPassword('');
        return (
            <div
                className="success"
                style={{
                    //display: submitted ? '' : 'none',
                }}>
                <h3>User {email} successfully registered!!</h3>
                
            </div>
        );
    };
 
    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    //display: error ? '' : 'none',
                }}>
                <h3>Please enter all the fields</h3>
            </div>
        );
    };
 
    return (
        <div className="form">
            <table>
                <tr>
                    <td>
                    <div>
                <h1>User Registration</h1>
            </div>
 
            {/* Calling to the methods */}
            <div className="messages">
                <h3>{message}</h3>
            </div>
 
            <form>
                {/* Labels and inputs for form data */}
 
                <label className="label">
                    <p>Email</p>
                <input onChange={handleEmail} className="input"
                    value={email} type="email" />
                </label>
                <br/>
                <br/>
                <label className="label">
                    <p>Password</p>
                <input onChange={handlePassword} className="input"
                    value={password} type="password" />
                </label>
                <br/>
                <br/>
                <div>
                    <Button variant="info" onClick={handleSubmit}>Submit</Button>
                </div>
                <br/>
                <p>
                    Go back to <Link to='/login'>Login Page here</Link>
                </p>
            </form>
                    </td>
                    <td>
                    <div className='food-image'>
                <img src={require("../Simple Cooking.jpg")} />
            </div>
                    </td>
                </tr>
            </table>
            
           
        </div>
    );
}
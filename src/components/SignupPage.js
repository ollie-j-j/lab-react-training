import React, { useState } from 'react';

function SignupForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nationality, setNationality] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordStrong, setIsPasswordStrong] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [greeting, setGreeting] = useState("");

    const validateEmail = (email) => {
        return email.includes("@");
    }

    const validatePassword = (password) => {
        return password.length >= 8;
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsEmailValid(validateEmail(email));
        setIsPasswordStrong(validatePassword(password));
        setIsSubmitted(true);

        if (nationality === "en") {
            setGreeting("Hello");
        } else if (nationality === "de") {
            setGreeting("Hallo");
        } else if (nationality === "fr") {
            setGreeting("Bonjour");
        } else {
            setGreeting("");
        }

    };

    const handleChange = (event) => {
        setNationality(event.target.value);
    };

    return (
        <div>
            <h2>Signup Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange}
                        style={{ backgroundColor: isSubmitted && (!isEmailValid ? 'red' : 'green') }} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange}
                        style={{ backgroundColor: isSubmitted && (!isPasswordStrong ? 'red' : 'green') }} />
                </label>
                <label>
                    Nationality:
                    <select value={nationality} onChange={handleChange}>
                        <option value="">Please select a nationality</option>
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
            {isSubmitted && 
                <div>
                    <p>{greeting}</p>
                    <p>Your email is {email}</p>
                </div>
            }
        </div>
    );
}

export default SignupForm;
import React, { useState } from "react";

function Register2() {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email: "",
        country: "",
        age: "",
        gender: "",
        profile: null,
        dob: "",
        terms: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked, files } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.terms) {
            alert("Please accept the terms and conditions.");
            return;
        }

        alert("Registration data:\n" + JSON.stringify(formData, null, 2));
    };

    const { name, password, email, country, age, gender, dob, terms } = formData;

    return (
        <div className="container-fluid bg-light min-vh-100 py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-11 col-md-9 col-lg-8 col-xl-7">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-header bg-primary text-white text-center py-4 rounded-top-4">
                            <h2 className="fw-bold mb-1">Create Your Account</h2>
                            <p className="mb-0">Register2 to get started</p>
                        </div>

                        <div className="card-body p-4 p-md-5">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-4">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                                        <input id="name" name="name" type="text" className="form-control form-control-lg" placeholder="Enter your full name" value={name} onChange={handleChange} required />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                                        <input id="email" name="email" type="email" className="form-control form-control-lg" placeholder="Enter your email" value={email} onChange={handleChange} required />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="password" className="form-label fw-semibold">Password</label>
                                        <input id="password" name="password" type="password" className="form-control form-control-lg" placeholder="Enter your password" value={password} onChange={handleChange} required />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="age" className="form-label fw-semibold">Age</label>
                                        <input id="age" name="age" type="number" min="1" className="form-control form-control-lg" placeholder="Enter your age" value={age} onChange={handleChange} required />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="country" className="form-label fw-semibold">Country</label>
                                        <select id="country" name="country" className="form-select form-select-lg" value={country} onChange={handleChange} required>
                                            <option value="">Select country</option>
                                            <option value="India">India</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="Canada">Canada</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="dob" className="form-label fw-semibold">Date of Birth</label>
                                        <input id="dob" name="dob" type="date" className="form-control form-control-lg" value={dob} onChange={handleChange} required />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label fw-semibold">Gender</label>
                                        <div className="border rounded-3 p-3">
                                            {[["male", "Male"], ["female", "Female"], ["other", "Other"]].map(([value, label]) => (
                                                <div className="form-check form-check-inline" key={value}>
                                                    <input className="form-check-input" id={value} name="gender" type="radio" value={value} checked={gender === value} onChange={handleChange} />
                                                    <label className="form-check-label" htmlFor={value}>{label}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="profile" className="form-label fw-semibold">Profile Picture</label>
                                        <input id="profile" name="profile" type="file" accept="image/*" className="form-control" onChange={handleChange} />
                                        <div className="form-text">Please select an image for your profile.</div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input id="terms" name="terms" type="checkbox" className="form-check-input" checked={terms} onChange={handleChange} required />
                                            <label className="form-check-label" htmlFor="terms">I accept the terms and conditions</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary btn-lg rounded-3">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="card-footer text-center bg-white border-0 py-3 rounded-bottom-4">
                            <small className="text-muted">Already have an account?<a href="#login" className="text-decoration-none ms-1">Login</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register2;

import React, { Component } from "react";

class Register1 extends Component {

    state = {
        name: "",
        password: "",
        email: "",
        country: "",
        age: "",
        gender: "",
        profile: null,
        dob: "",
        terms: false,
    };

    handleChange = (event) => {

        const { name, value, type, checked, files } = event.target;

        this.setState({
            [name]:
                type === "checkbox"
                    ? checked
                    : type === "file"
                    ? files[0]
                    : value,
        });
    };

    handleSubmit = (event) => {

        event.preventDefault();

        if (!this.state.terms) {
            alert("Please accept the terms and conditions.");
            return;
        }

        alert(
            "Registration data:\n" +
            JSON.stringify(this.state, null, 2)
        );
    };

    render() {

        const {
            name,
            password,
            email,
            country,
            age,
            gender,
            dob,
            terms,
        } = this.state;

        return (
            <div className="container-fluid bg-light min-vh-100 py-5">

                <div className="row justify-content-center">

                    <div className="col-12 col-sm-11 col-md-9 col-lg-8 col-xl-7">

                        <div className="card shadow-lg border-0 rounded-4">

                            {/* Header */}
                            <div className="card-header bg-primary text-white text-center py-4 rounded-top-4">
                                <h2 className="fw-bold mb-1">
                                    Create Your Account
                                </h2>

                                <p className="mb-0">
                                    Register to get started
                                </p>
                            </div>

                            {/* Form */}
                            <div className="card-body p-4 p-md-5">

                                <form onSubmit={this.handleSubmit}>

                                    <div className="row g-4">

                                        {/* Name */}
                                        <div className="col-12 col-md-6">

                                            <label
                                                htmlFor="name"
                                                className="form-label fw-semibold"
                                            >
                                                Full Name
                                            </label>

                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Enter your full name"
                                                value={name}
                                                onChange={this.handleChange}
                                                required
                                            />

                                        </div>


                                        {/* Email */}
                                        <div className="col-12 col-md-6">

                                            <label
                                                htmlFor="email"
                                                className="form-label fw-semibold"
                                            >
                                                Email Address
                                            </label>

                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                className="form-control form-control-lg"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={this.handleChange}
                                                required
                                            />

                                        </div>


                                        {/* Password */}
                                        <div className="col-12 col-md-6">

                                            <label
                                                htmlFor="password"
                                                className="form-label fw-semibold"
                                            >
                                                Password
                                            </label>

                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                className="form-control form-control-lg"
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={this.handleChange}
                                                required
                                            />

                                        </div>


                                        {/* Age */}
                                        <div className="col-12 col-md-6">

                                            <label
                                                htmlFor="age"
                                                className="form-label fw-semibold"
                                            >
                                                Age
                                            </label>

                                            <input
                                                id="age"
                                                name="age"
                                                type="number"
                                                min="1"
                                                className="form-control form-control-lg"
                                                placeholder="Enter your age"
                                                value={age}
                                                onChange={this.handleChange}
                                                required
                                            />

                                        </div>


                                        {/* Country */}
                                        <div className="col-12 col-md-6">

                                            <label
                                                htmlFor="country"
                                                className="form-label fw-semibold"
                                            >
                                                Country
                                            </label>

                                            <select
                                                id="country"
                                                name="country"
                                                className="form-select form-select-lg"
                                                value={country}
                                                onChange={this.handleChange}
                                                required
                                            >

                                                <option value="">
                                                    Select country
                                                </option>

                                                <option value="India">
                                                    India
                                                </option>

                                                <option value="USA">
                                                    USA
                                                </option>

                                                <option value="UK">
                                                    UK
                                                </option>

                                                <option value="Canada">
                                                    Canada
                                                </option>

                                            </select>

                                        </div>


                                        {/* Date of Birth */}
                                        <div className="col-12 col-md-6">

                                            <label
                                                htmlFor="dob"
                                                className="form-label fw-semibold"
                                            >
                                                Date of Birth
                                            </label>

                                            <input
                                                id="dob"
                                                name="dob"
                                                type="date"
                                                className="form-control form-control-lg"
                                                value={dob}
                                                onChange={this.handleChange}
                                                required
                                            />

                                        </div>


                                        {/* Gender */}
                                        <div className="col-12">

                                            <label className="form-label fw-semibold">
                                                Gender
                                            </label>

                                            <div className="border rounded-3 p-3">

                                                <div className="row">

                                                    <div className="col-12 col-sm-4 mb-2 mb-sm-0">

                                                        <div className="form-check">

                                                            <input
                                                                className="form-check-input"
                                                                id="male"
                                                                name="gender"
                                                                type="radio"
                                                                value="male"
                                                                checked={gender === "male"}
                                                                onChange={this.handleChange}
                                                            />

                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="male"
                                                            >
                                                                Male
                                                            </label>

                                                        </div>

                                                    </div>


                                                    <div className="col-12 col-sm-4 mb-2 mb-sm-0">

                                                        <div className="form-check">

                                                            <input
                                                                className="form-check-input"
                                                                id="female"
                                                                name="gender"
                                                                type="radio"
                                                                value="female"
                                                                checked={gender === "female"}
                                                                onChange={this.handleChange}
                                                            />

                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="female"
                                                            >
                                                                Female
                                                            </label>

                                                        </div>

                                                    </div>


                                                    <div className="col-12 col-sm-4">

                                                        <div className="form-check">

                                                            <input
                                                                className="form-check-input"
                                                                id="other"
                                                                name="gender"
                                                                type="radio"
                                                                value="other"
                                                                checked={gender === "other"}
                                                                onChange={this.handleChange}
                                                            />

                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="other"
                                                            >
                                                                Other
                                                            </label>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>


                                        {/* Profile Picture */}
                                        <div className="col-12">

                                            <label
                                                htmlFor="profile"
                                                className="form-label fw-semibold"
                                            >
                                                Profile Picture
                                            </label>

                                            <input
                                                id="profile"
                                                name="profile"
                                                type="file"
                                                accept="image/*"
                                                className="form-control"
                                                onChange={this.handleChange}
                                            />

                                            <div className="form-text">
                                                Please select an image for your profile.
                                            </div>

                                        </div>


                                        {/* Terms */}
                                        <div className="col-12">

                                            <div className="form-check">

                                                <input
                                                    id="terms"
                                                    name="terms"
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked={terms}
                                                    onChange={this.handleChange}
                                                    required
                                                />

                                                <label
                                                    className="form-check-label"
                                                    htmlFor="terms"
                                                >
                                                    I accept the terms and conditions
                                                </label>

                                            </div>

                                        </div>


                                        {/* Buttons */}
                                        <div className="col-12">

                                            <div className="d-grid">

                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-lg rounded-3"
                                                >
                                                    Register
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                </form>

                            </div>

                            {/* Footer */}
                            <div className="card-footer text-center bg-white border-0 py-3 rounded-bottom-4">

                                <small className="text-muted">
                                    Already have an account?
                                    <a
                                        href="#login"
                                        className="text-decoration-none ms-1"
                                    >
                                        Login
                                    </a>
                                </small>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Register1;


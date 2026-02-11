import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import FormError from "../components/FormError/FormError";

class Stage3 extends Component {
  state = {
    email: "",
    agreed: false,
    error: "",
    submitted: false,
  };

  validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const fieldValue = type === "checkbox" ? checked : value;

    this.setState({
      [name]: fieldValue,
      error: "",
    });

    // Update global formData for live progress
    const { setFormData } = this.props.context;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  handleSubmit = () => {
    const { email, agreed } = this.state;

    if (!email) {
      this.setState({ error: "Email is required" });
      return;
    }

    if (!this.validateEmail(email)) {
      this.setState({
        error: "Please enter a valid email address e.g. abc@example.com",
      });
      return;
    }

    if (!agreed) {
      this.setState({ error: "You must agree to the terms" });
      return;
    }

    // Context data update
    const { setFormData, setStage3Done, setCurrentStage } = this.props.context;

    setFormData((prev) => ({
      ...prev,
      email,
      agreed,
    }));

    setStage3Done(true);
    setCurrentStage("success");

    // THIS triggers navigation
    this.setState({ submitted: true });
  };

  render() {
    const { email, agreed, error, submitted } = this.state;

    if (submitted) {
      return <Navigate to="/register/success" replace />;
    }

    const isFormValid = email && this.validateEmail(email) && agreed;

    return (
      <div>
        {/* Email input */}
        <input
          type="email"
          name="email"
          placeholder="Email Address: abc@example.com"
          value={email}
          onChange={this.handleChange}
          className="w-full border px-3 py-2 mb-1"
        />

        {/* Agreement checkbox */}
        <label className="flex items-center gap-2 text-sm mt-2">
          <input
            type="checkbox"
            className="cursor-pointer"
            name="agreed"
            checked={agreed}
            onChange={this.handleChange}
          />
          I agree to the terms and conditions
        </label>

        {/* Error message */}
        <FormError message={error} />

        {/* Submit button */}
        <button
          onClick={this.handleSubmit}
          className={`w-full py-2 rounded mt-4 text-white transition ${
            isFormValid ? "bg-green-600 hover:bg-green-700" : "bg-gray-500"
          }`}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Stage3;

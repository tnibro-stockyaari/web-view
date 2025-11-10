import React, { useState } from "react";
import AppContainer from "../components/AppContainer";
import Title from "../components/Title";
import BackButton from "../components/Back-Button";
import AppText from "../components/AppText";
import Input from "../components/Input/Input";
import CheckboxAgreement from "../components/Checkbox";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const PanDetails = () => {
  const [formData, setFormData] = useState({
    pan: "",
    fullName: "",
    dateOfBirth: "",
    termsChecked: false,
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePanDetails = () => {
    // if (!formData.pan || !formData.fullName || !formData.dateOfBirth) {
    //   setError("Please fill all fields");
    //   return;
    // }
    // if (!formData.termsChecked) {
    //   setError("Please agree to terms");
    //   return;
    // }
    console.log("Form Data:", formData);
    navigate("/kyc/select-mobile-no");
  };

  return (
    <>
      <AppContainer
        padding="p-4"
        className="shadow-sm"
        background="#ffffff"
        style={{ borderRadius: "15px" }}
      >
        <BackButton />
        <Title text="Heading h1" level={1} className="mt-4">
          Verify PAN Details
        </Title>
        <AppText className="mt-2 text-capitalize">
          Provide your PAN details to continue.
        </AppText>

        <Input
          label="PAN Number"
          name="pan"
          type="text"
          value={formData.pan}
          onChange={handleChange}
          placeholder="ABCDE1234F"
          required={true}
          inputClassName="px-2 py-0 text-uppercase"
          containerClassName="mt-3"
        />

        <Input
          label="Full Name (as per PAN)"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your name"
          required={true}
          inputClassName="px-2 py-0"
          containerClassName="mt-3"
        />

        <Input
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required={true}
          inputClassName="px-2 py-0"
          containerClassName="mt-3"
        />

        <Input
          type="checkbox"
          name="termsChecked"
          checked={formData.termsChecked}
          onChange={handleChange}
          containerClassName="mt-5"
          labelClassName="ms-2"
        >
          I confirm that the above details are correct and I agree to the{" "}
          <a
            href="/terms"
            className="text-success fw-bold text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms & Policies
          </a>
        </Input>

        {error && <div className="alert alert-danger mt-3">{error}</div>}

        <Button
          className="btn btn-success w-100 fw-semibold fs-22 rounded-14 mt-4"
          onClick={handlePanDetails}
        >
          Verify PAN
        </Button>
      </AppContainer>
    </>
  );
};

export default PanDetails;

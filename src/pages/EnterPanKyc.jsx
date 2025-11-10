import React, { useState } from "react";
import AppContainer from "../components/AppContainer";
import BackButton from "../components/Back-Button";
import banner from "../assets/img/card-img.png";
import AppText from "../components/AppText";
import Title from "../components/Title";
import Input from "../components/Input/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const EnterPanKyc = () => {
  const [pan, setPan] = useState("");
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
  const error = pan && !panRegex.test(pan) ? "Valid PAN: ABCDE1234F" : "";
  const navigate = useNavigate();
  const handlePan = () => {
    navigate("/kyc/pan-details");
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
        <div>
          <img
            src={banner}
            alt="card-img"
            width="160"
            height="160"
            className="d-block mx-auto mt-2"
          />
        </div>
        <Title text="Heading h1" level={1} className="text-center mt-2">
          Enter Your PAN
        </Title>
        <AppText className="text-center mt-2">
          We’ll verify your details with SEBI/KRA records
        </AppText>
        <Input
          label="PAN Number"
          name="pan"
          value={pan}
          onChange={(e) => setPan(e.target.value)}
          placeholder="ABCDE1234F"
          maxLength={10}
          autoUppercase
          error={error}
          // compact padding: LR 0.5rem, TB 0
          inputClassName="px-2 py-0"
          helpText="Your PAN should be 10 characters (e.g., ABCDE1234F)."
        />
        <Button
          className="btn btn-success w-100 fw-semibold fs-22 rounded-14 mt-136"
          onClick={handlePan}
        >
          Verify PAN
        </Button>
      </AppContainer>
    </>
  );
};

export default EnterPanKyc;

import React from "react";
import AppContainer from "../components/AppContainer";
import BackButton from "../components/Back-Button";
import Title from "../components/Title";
import AppText from "../components/AppText";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const SelectMobile = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/kyc/select-email");
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
          Select Mobile Number
        </Title>
        <AppText className="mt-3">
          Select the mobile number linked with your PAN
        </AppText>
        <Card
          title="+91-770380426"
          description="the number registered in SEBI/KRA records"
         
          buttonLabel="Click Me"
          // buttonAction={handleButtonClick}
          // className="mt-4"
          // style={{ maxWidth: "400px", margin: "0 auto" }}
        />
        <Card
          title="+91-770380426"
          subtitle="the number registered in SEBI/KRA records"
          
          // buttonLabel="Click Me"
          onContinue={handleContinue}
          className="mt-4"
          // style={{ maxWidth: "400px", margin: "0 auto" }}
        />
      </AppContainer>
    </>
  );
};

export default SelectMobile;

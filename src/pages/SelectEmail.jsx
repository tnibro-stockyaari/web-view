import React from "react";
import AppContainer from "../components/AppContainer";
import BackButton from "../components/Back-Button";
import Title from "../components/Title";
import AppText from "../components/AppText";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
const SelectEmail = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/kyc/submit");
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
          Select Email ID
        </Title>
        <AppText className="mt-3">
          Select the email ID linked with your PAN.
        </AppText>
        <Card
          title="kunalk4598@gmail.com"
          description="The Email ID registered in SEBI/KRA records"
          text="the number registered in SEBI/KRA records"
          buttonLabel="Click Me"
          // buttonAction={handleButtonClick}
          // className="mt-4"
          // style={{ maxWidth: "400px", margin: "0 auto" }}
        />
        <Card
          title="digitalsafari1234@gmail.com"
          description="the number registered in SEBI/KRA records"
          text="This is some content inside the card. It can be any text or content."
          buttonLabel="Click Me"
          onContinue={handleContinue}
          className="mt-4"
          // style={{ maxWidth: "400px", margin: "0 auto" }}
        />
      </AppContainer>
    </>
  );
};

export default SelectEmail;

import React from "react";
import banner from "../assets/img/img1.png";
import AppContainer from "../components/AppContainer";
import Title from "../components/Title";
import BackButton from "../components/Back-Button";
import AppText from "../components/AppText";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
const KycSelectMobile = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/kyc/enter-pan"); 
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
          Verify Your Identity
        </Title>
        <AppText className="mt-3">
          Select the mobile number linked with your PAN
        </AppText>
        <Card
          title="Card Title"
          subtitle="Card Subtitle"
          text="This is some content inside the card. It can be any text or content."
          buttonLabel="Click Me"
          // buttonAction={handleButtonClick}
          className="mt-4"
          // style={{ maxWidth: "400px", margin: "0 auto" }}
        />
        <Card
          title="Card Title"
          subtitle="Card Subtitle"
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

export default KycSelectMobile;

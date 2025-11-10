import React from "react";
import AppContainer from "../components/AppContainer";
import BackButton from "../components/Back-Button";
import kyc from "../assets/img/kyc-img.png";
import Title from "../components/Title";
import AppText from "../components/AppText";
import Button from "../components/Button";
const KycSubmit = () => {
  const handleFinalSubmit =()=>{
    // Final submission logic here
    console.log("KYC process completed. Redirecting to dashboard...");  
    alert("KYC process completed. Redirecting to dashboard...");
  }
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
            src={kyc}
            alt="card-img"
            width="300"
            height="250"
            className="d-block mx-auto mt-2"
          />
        </div>
        <Title text="Heading h1" level={1} className="text-center mt-2">
          KYC Submitted Successfully
        </Title>
        <AppText className="text-center mt-2">
          Verification usually takes 24–48 hours. We’ll notify you once it’s
          done
        </AppText>
        <Button
          className="btn btn-success w-100 fw-semibold fs-22 rounded-14 mt-136"
          onClick={handleFinalSubmit}
        >
          Go to dashboard
        </Button>
      </AppContainer>
    </>
  );
};

export default KycSubmit;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VerifyIdentity = ({ 
  title = "Verify Your Identity",
  subtitle = "select the mobile number linked with your PAN",
  phoneNumbers = []
}) => {
  const handleContinue = (phoneNumber) => {
    console.log(`Continue with: ${phoneNumber}`);
    // Add your continue logic here
  };

  return (
    <div className="container-fluid min-vh-100 bg-white">
      {/* Header */}
      <div className="row">
        <div className="col-12 pt-3 pb-3 px-3">
          <button className="btn btn-link text-dark p-0" style={{ fontSize: '20px' }}>
            <i className="bi bi-arrow-left">←</i>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="row">
        <div className="col-12 px-3">
          {/* Title */}
          <h1 className="mb-0" style={{ fontSize: '28px', fontWeight: '600', lineHeight: '100%' }}>
            {title}
          </h1>
          
          {/* Subtitle - 11px from title */}
          <p className="text-muted mb-0" style={{ fontSize: '14px', marginTop: '11px' }}>
            {subtitle}
          </p>

          {/* Phone Number Cards - 23px from subtitle */}
          <div style={{ marginTop: '23px' }}>
            {phoneNumbers.map((phone, index) => (
              <div 
                key={index}
                className="card border rounded-3 p-3 d-flex flex-row justify-content-between align-items-center"
                style={{ 
                  marginBottom: index < phoneNumbers.length - 1 ? '17px' : '0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
              >
                <div className="flex-grow-1">
                  <div className="fw-semibold" style={{ fontSize: '16px' }}>
                    {phone.number}
                  </div>
                  <div className="text-muted" style={{ fontSize: '12px' }}>
                    {phone.description}
                  </div>
                </div>
                <button 
                  className="btn btn-dark btn-sm rounded-pill px-4"
                  onClick={() => handleContinue(phone.number)}
                  style={{ fontSize: '13px' }}
                >
                  Continue
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="position-fixed bottom-0 start-0 w-100 bg-light py-3 text-center">
        <div className="d-flex justify-content-center align-items-center">
          <span className="text-success me-2" style={{ fontSize: '20px' }}>✓</span>
          <span style={{ fontSize: '12px', fontWeight: '500' }}>100% SAFE & SECURE</span>
        </div>
        <div className="progress mt-2 mx-auto" style={{ width: '40%', height: '3px' }}>
          <div 
            className="progress-bar bg-success" 
            role="progressbar" 
            style={{ width: '50%' }}
            aria-valuenow="50" 
            aria-valuemin="0" 
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

// Example Usage
export default function App() {
  const phoneData = [
    {
      number: '+91-7703804826',
      description: 'This Number Registered In SBI/TRAI/KRA Records'
    },
    {
      number: '+91-7703804826',
      description: 'This Number Registered In SBI/TRAI/KRA Records'
    }
  ];

  return <VerifyIdentity phoneNumbers={phoneData} />;
}
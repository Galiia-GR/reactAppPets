import { useState } from 'react';

const messages = ['They realy cute', 'Do you want it', 'Eeee, we sent to you'];

function Tips() {
  const [step, setStep] = useState(1);
  const [isOpen, setOpenClose] = useState(true);

  function handlePrev() {
    if (step > 1) setStep((curStep) => curStep - 1);
  }

  function handleNext() {
    if (step < 3) setStep((curStep) => curStep + 1);
  }

  function setOpCl() {
    setOpenClose((el) => !el);
  }

  return (
    <>
      <button type="button" onClick={setOpCl}>
        tips &times;
      </button>
      <div style={isOpen ? { display: 'flex' } : { display: 'none' }}>
        <Button className="btn" type="button" onClick={handlePrev}>
          <span>*//*</span>
          Prev
        </Button>
        <StepMessage step={step}>{messages[step]}</StepMessage>
        <Button className="btn" type="button" onClick={handleNext}>
          <span>*//*</span>
          Next
        </Button>
      </div>
    </>
  );
}

export default Tips;

function Button ({className, type, onClick, children }) {
  return (
    <button className="btn" type="button" onClick={onClick}>
      {children}
    </button>
  );
}

function StepMessage({step, children}){
  return (
    <p style={{ fontSize: 20 }}>
      <h3>{messages[step]}</h3>
      {children}
    </p>
  );
}

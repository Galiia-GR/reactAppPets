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
        <button className="btn" type="button" onClick={handleNext}>
          next
        </button>
        <p style={{ fontSize: 20 }}>{messages[step]}</p>
        <button className="btn" type="button" onClick={handlePrev}>
          prev
        </button>
      </div>
    </>
  );
}

export default Tips;

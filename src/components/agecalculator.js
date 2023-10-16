import React, { useState } from 'react';

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const formatDOB = (input) => {
    const formattedDOB = input.replace(/(\d{2})(\d{2})(\d{4})/, '$1-$2-$3');
    return formattedDOB;
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    const formattedDOB = formatDOB(input);
    setDob(formattedDOB);
  };

  const calculateAge = () => {
    const [day, month, year] = dob.split('-');
    const dobDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();
    const ageDiff = currentDate - dobDate;
    const ageDate = new Date(ageDiff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    setAge(calculatedAge);
  };

  return (
    <div>
      <div className="calc">
        <h1>Age Calculator</h1>
      </div>
      <div>
        <br />
        <h5>Enter your date of birth</h5>
        <input
          id="i1"
          type="text"
          value={dob}
          placeholder="DD-MM-YYYY"
          onChange={handleInputChange}
        />
      </div>
      <br />
      <button className="btn btn-primary" onClick={calculateAge}>
        Calculate Age
      </button>
      <br />
      <br />
      {age && <p id="t1">You are {age} years old.</p>}
    </div>
  );
}

export default AgeCalculator;

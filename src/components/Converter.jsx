import React, { useState } from 'react';


function Converter() {
  const [inches, setInches] = useState('');
  const [centimeters, setCentimeters] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInches(inputValue);
    const cmValue = parseFloat(inputValue) * 2.54;
    setCentimeters(cmValue.toFixed(2));
  };

  return (
    <div style={styles.container}>
    <h3>Tum till cm</h3>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Tum:</label>
        <input
          type="number"
          value={inches}
          onChange={handleInputChange}
          style={styles.input}
        />
      </div>
      <p>Cm: {centimeters}</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Gör konverteraren fyller hela höjden av skärmen
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    marginRight: '10px',
  },
  input: {
    width: 'auto',
    height: '3em',
    borderRadius: '10px',
    border: '2px #eab2bb solid',
    paddingLeft: '0.5rem'
  },
};

export default Converter;
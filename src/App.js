import React, { useState } from 'react';

function App() {
  // State to manage the input string
  const [inputString, setInputString] = useState('');
  // State to manage the output
  const [output, setOutput] = useState(null);

  // Function to handle button click
  const handleButtonClick = () => {
    // Calculate the number of vowels and consonants
    const vowels = inputString.toLowerCase().replace(/[^aeiou]/g, '').length;
    const consonants = inputString.toLowerCase().replace(/[aeiou\s]/g, '').length;

    // Update the output state
    setOutput({ vowels, consonants });
  };

  return (
    <div>
      <h1>Hello</h1>
      <p>Enter thr String</p>

      {/* Input field for string */}
      <input
        type="text"
        placeholder="Enter a string"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
      />

      {/* Button to calculate and display vowels and consonants */}
      <button onClick={handleButtonClick}>Calculate</button>

      {/* Display the output */}
      {output && (
        <div style={{ marginTop: '20px' }}>
          <p>Number of vowels: {output.vowels}</p>
          <p>Number of consonants: {output.consonants}</p>
        </div>
      )}
    </div>
  );
}

export default App;

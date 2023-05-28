import React, { useState } from 'react';

const OPEN_API_KEY = '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';

const App_test = () => {
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [inputText, setInputText] = useState('"1. How do i customize taxes?   2. Is there a way to customize taxes?   3. Is a participant tax able to be overriden?   4. Is there documentation for customizing reporting?"');
  const [inputQuestion, setInputQuestion] = useState('');


  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleInputQuestion = (e) => {
    setInputQuestion(e.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPEN_API_KEY}`
        },
        body: JSON.stringify({
          prompt: "From this list of numbered questions " + inputText + " which closely matches " + "'" + inputQuestion + "'" + "? print out the questions and match percentage in decreasing order of match percentage", // Use the input text as the prompt
          max_tokens: 100,
          temperature:0.0
        })
      });

      const data = await response.json();

      if (response.ok) {
        setResponse(data.choices[0].text);
        setError('');
      } else {
        setError(data.error.message);
        setResponse('');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      setResponse('');
    }
  };

  return (
    <div>
      <h1>List of possible questions</h1>
      <div>
        <textarea value={inputText} onChange={handleInputChange} />
        </div>
        <div>
        <textarea value={inputQuestion} onChange={handleInputQuestion} />
        <button onClick={handleButtonClick}>Get Response</button>
      </div>
      {response && <p>Response: {response}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default App_test;

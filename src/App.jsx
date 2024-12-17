import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setInvestmentData((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const isValidInputData = investmentData.duration >= 1;

  return (
    <>
      <Header />
      <UserInput investmentData={investmentData} handleChange={handleChange} />
      {isValidInputData ? (
        <Results investmentData={investmentData} />
      ) : (
        <p className="center">Please enter a duration greater than 0</p>
      )}
    </>
  );
}

export default App;

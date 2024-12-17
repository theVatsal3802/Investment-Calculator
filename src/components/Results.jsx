import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ investmentData }) {
  const results = calculateInvestmentResults(investmentData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest Earned</th>
          <th>Total Interest</th>
          <th>Ivestment Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            investmentData.initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

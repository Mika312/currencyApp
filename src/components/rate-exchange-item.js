import React from "react";
import ReactChartKick, { AreaChart } from "react-chartkick";
import Chart from "chart.js";

ReactChartKick.addAdapter(Chart);
const RateExchangeItem = ({ rateExchange }) => {
  console.log("rateExchange", rateExchange);
  const { name, flag, rates, currencyCode } = rateExchange;

  function formateRates(rates, currencyCode) {
    return Object.keys(rates).map(date => {
      return [date, rates[date][currencyCode]];
    });
  }

  return (
    <tr>
      <td>
        {name}
        <br />
        <img src={flag} height="60" width="100" />
      </td>
      <td className="col-md-12">
        <AreaChart
          data={formateRates(rates, currencyCode)}
          xtitle="Date"
          ytitle={currencyCode}
        />
      </td>
    </tr>
  );
};

export default RateExchangeItem;

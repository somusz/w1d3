//I put the getTax function inside just to have another function but I don't really understand how functions help in this exercise...
// the original tax-calculation is commented out below the function

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  results = {};
  for (k = 0; k < salesData.length; k++) {
    salesData[k].salesInProvince = 0;
    for (i = 0; i < salesData[k].sales.length; i++) {
      salesData[k].salesInProvince += salesData[k].sales[i];
    }
    function getTax (revenue,tax) {
      return revenue * tax;
    }
    salesData[k].taxInProvince = getTax(salesData[k].salesInProvince,taxRates[salesData[k].province]);
    // salesData[k].taxInProvince = salesData[k].salesInProvince * taxRates[salesData[k].province];

    if (results[salesData[k].name]) {
      results[salesData[k].name].totalSales += salesData[k].salesInProvince;
      results[salesData[k].name].totalTaxes += salesData[k].taxInProvince;
    } else {
      results[salesData[k].name] = {totalSales: salesData[k].salesInProvince, totalTaxes: salesData[k].taxInProvince};
    }
  }
  return results;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

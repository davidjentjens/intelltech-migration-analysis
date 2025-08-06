// Utility function to format monthly cost
export const formatMonthlyCost = (monthlyCostBRL: number): string => {
  return `R$ ${monthlyCostBRL.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

// Utility function to calculate annual cost from monthly
export const calculateAnnualCost = (monthlyCostBRL: number): string => {
  const annual = monthlyCostBRL * 12;
  return `R$ ${annual.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

// Function to parse currency string back to number (for sorting)
export const parseCurrencyToNumber = (currencyString: string): number => {
  return Number(currencyString.replace('R$ ', '').replace(/\./g, '').replace(',', '.'));
};
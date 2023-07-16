
// Currency component
const Currency = ({ amount, currency }) => {
  // Format the amount with the correct currency symbol
  const formatCurrency = (amount, currency) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    });

    return formatter.format(amount);
  };

  return <span>{formatCurrency(amount, currency)}</span>;
};

export default Currency;

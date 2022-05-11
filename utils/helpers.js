module.exports = {
  format_date: (date) => {
    // Translate date values into human-readable MM/DD/YYYY 
    return date.toLocaleDateString();
  },
  // format_amount: (amount) => {
  //   // Translate large numbers into human-readable format with commas
  //   return parseInt(amount).toLocaleString();
  // },
  equality_test: (v1, v2, options) => {
    if(v1 == v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  }
  
};

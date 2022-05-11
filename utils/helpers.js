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
  
  // ,
  // get_emoji: () => {
  //   const randomNum = Math.random();
  //   // Translate large numbers into human-readable format with commas
  //   // Return a random emoji
  //   if (randomNum > 0.7) {
  //     return `<span for="img" aria-label="lightbulb">💡</span>`;
  //   } else if (randomNum > 0.4) {
  //     return `<span for="img" aria-label="laptop">💻</span>`;
  //   } else {
  //     return `<span for="img" aria-label="gear">⚙️</span>`;
  //   }
  // },
};

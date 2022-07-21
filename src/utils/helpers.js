module.exports = {
  format_date: (date) => {
    var d = new Date(date),
      month = '' + d.getMonth(),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  },

  formatDate_plus: (date) => {
    // Format date as YYYY-MM-DD + 1 year
    var d = new Date(date),
      month = '' + d.getMonth(),
      day = '' + d.getDate(),
      year = d.getFullYear() + 1;

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  },
};

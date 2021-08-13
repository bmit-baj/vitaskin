const config = {
    options: {
        chart: {
          id: 'Umsatz',
        },
        xaxis: {
          categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
        }
      },
      series: [{
        name: 'Jahresumsatz',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
}

export default config
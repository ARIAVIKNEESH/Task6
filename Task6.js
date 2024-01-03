// Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    //a) Get all the countries from Asia continent/region using the filter function
    const asia = data.filter(country => country.region === 'Asia');
    console.log('Countries in Asia:', asia);

    //b) Get all the countries with a population of less than 2 lakhs using the filter function
    const lessThan = data.filter(country => country.population && country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', lessThan);

    //c) Print details (name, capital, flag) using the forEach function
    data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags && country.flags.png);
      console.log('------------------'); // Separating entries for better readability
    });

    //d) Print the total population of countries using the reduce function
    const totalPopulation = data.reduce((acc, country) => acc + (country.population || 0), 0);
    console.log('Total Population of Countries:', totalPopulation);

    //e) Print the country that uses US dollars as currency
    const usDollar = data.filter(country => country.currencies && country.currencies.USD);
    console.log('Countries using US dollars:', usDollar);
  })
  .catch(error => console.error('Error fetching data:', error));

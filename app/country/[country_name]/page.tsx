const countryDetails: { [key: string]: { name: string; population: string; capital: string } } = {
  canada: { name: 'Canada', population: '38 million', capital: 'Ottawa' },
  australia: { name: 'Australia', population: '25 million', capital: 'Canberra' },
  germany: { name: 'Germany', population: '83 million', capital: 'Berlin' },
  japan: { name: 'Japan', population: '126 million', capital: 'Tokyo' },
  brazil: { name: 'Brazil', population: '213 million', capital: 'Brasilia' }
};

type Params = {
  params: {
    country_name: string;
  };
};

export default function CountryPage({ params }: Params) {
  const country = countryDetails[params.country_name.toLowerCase()];

  if (!country) {
    // If the country is not found, show a 404-like page
    return <h1 className="px-5 font-medium text-3xl">Country not found.</h1>;
  }

  return (
    <div className="px-5 text-3xl py-3 font-medium">
      <h1>{country.name}</h1>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
}

import Link from 'next/link';

const countries = [
  { name: 'Canada', population: '38 million', capital: 'Ottawa' },
  { name: 'Australia', population: '25 million', capital: 'Canberra' },
  { name: 'Germany', population: '83 million', capital: 'Berlin' },
  { name: 'Japan', population: '126 million', capital: 'Tokyo' },
  { name: 'Brazil', population: '213 million', capital: 'Brasilia' }
];

export default function CountryList() {
  return (
    <div className='px-6'>
      <h1 className='text-4xl font-bold'>Country List</h1>
      <ul className='py-4'>
        {countries.map((country) => (
          <li className='pointer hover:bg-cyan-400 hover:text-black' key={country.name}>
            {/* Link to the dynamic route for each country */}
            <Link href={`/country/${country.name.toLowerCase()}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

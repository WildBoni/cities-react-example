import City from './City';

export default function Cities() {
  let cities = [
    {
      id: 1,
      name: 'Paris',
      continent: 'Europe',
      visited: true
    },
    {
      id: 2,
      name: 'London',
      continent: 'Europe',
      visited: false
    },
    {
      id: 3,
      name: 'New York',
      continent: 'America',
      visited: true
    },
  ]

  let citiesList = cities.map(city => 
    <City name={city.name} continent={city.continent} />
  )

  return (
    <div>
      <h2>Cities:</h2>
      {citiesList}
    </div>
  )
}
// export default Cities;


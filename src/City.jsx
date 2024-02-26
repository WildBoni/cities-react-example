import { useState } from 'react';
import classes from './city.module.css'

export default function City({name, continent, visited}) {
  let [visitedCity, setVisitedCity] = useState(visited);
  
  function handleClick() {
    setVisitedCity(!visitedCity) 
    // true --> false 
    // false ---> true
  }
  
  return (
    <div className={classes.city}>
      <h2 className={visitedCity ? classes.visited : classes.notvisited}>{name}</h2>
      <p>{continent}</p>
      {visitedCity && <h3>L'ho visitata!</h3>}
      <button onClick={handleClick}>Toggle visited</button>
    </div>
  )
}
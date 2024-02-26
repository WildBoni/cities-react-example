import classes from './city.module.css'

export default function City({name, continent, visited}) {
  return (
    <div className={classes.city}>
      <h2 className={visited ? classes.visited : classes.notvisited}>{name}</h2>
      <p>{continent}</p>
      {visited && <h3>L'ho visitata!</h3>}
    </div>
  )
}
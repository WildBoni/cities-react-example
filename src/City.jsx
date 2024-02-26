import classes from './city.module.css'

export default function City({name, continent}) {
  return (
    <div className={classes.city}>
      <h2>{name}</h2>
      <p>{continent}</p>
    </div>
  )
}
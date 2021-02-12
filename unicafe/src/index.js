import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(good+1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral+1)
  }
  const increaseBad = () => {
    setBad(bad+1)
  }

  return (
    <div>
     <h2>Give feedback</h2>
     <Button handleClick={() => increaseGood()} text="good" />
     <Button handleClick={() => increaseNeutral()} text="neutral" />
     <Button handleClick={() => increaseBad()} text="bad" />
     <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )

}
const Statistic=({text,value})=>(

    <tr><td>{text}</td><td> {value}</td></tr>
)
const Statistics = (props) => {
  const {good,bad,neutral}=props
  const average=good*1+bad*0+neutral*-1
  const all=props.good+props.bad+props.neutral
  const positive= good/all*100
  return(
    <div>
      <table>
        <h2>Statistics</h2>
      <Statistic text="good" value ={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value ={bad} />
      <Statistic text="all" value ={all} />
      <Statistic text="average" value ={average} />
      <Statistic text="positive" value ={`${positive?positive:0}%`} />
      </table>
    </div>
  )
}
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

ReactDOM.render(<App />, 
  document.getElementById('root')
)
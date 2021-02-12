import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';
const App = (props) => {
  const [selected, setSelected] = useState(0)

  const points = new Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(points)
  const [mostVotedIndex, setMostVotedIndex] = useState(0)
  const Random = () => (setSelected(Math.floor(Math.random() * anecdotes.length)))
  const Vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes([...copy])
    getMostVoted(copy)

  }
  const getMostVoted = (arr) => {
    const mostVoted = arr.indexOf(Math.max(...arr))
    setMostVotedIndex(mostVoted)
  }
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <h4>{props.anecdotes[selected]}</h4>
      <h4>has {votes[selected]} votes.</h4>
      <Button handleClick={() => Vote()} text="vote" />
      <Button handleClick={() => Random()} text="next anecdote" />
      <h2>Anecdote with most votes</h2>
      <h4>{props.anecdotes[mostVotedIndex]}</h4>
      <h4>has {votes[mostVotedIndex]} votes.</h4>
    </div>
  )
}
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
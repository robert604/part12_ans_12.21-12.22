import React from 'react'
import {voteForAnecdote,addNewAnecdote} from './reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => {
    const newstate = [...state].sort((a,b)=>b.votes-a.votes)
    return newstate
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteForAnecdote(id))
  }

  const createNew = event => {
    event.preventDefault()
    const content = event.target.anecdote_text.value  
    dispatch(addNewAnecdote(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={createNew}>
        <div><input name='anecdote_text'/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App
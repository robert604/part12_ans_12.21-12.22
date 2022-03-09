import anecdoteServices from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    //id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = [], action) => {
  //console.log('anecdotereducer',action)
  let newstate
  switch(action.type) {
    case 'VOTE':
      newstate = state.map(anecdote=>anecdote.id===action.updated.id ? action.updated : anecdote)
      return newstate
    case 'NEW':
      const newAnecdote = action.content
      newstate = state.concat(newAnecdote)
      return newstate
    case 'INITIALIZE_ANECDOTES':
      newstate = action.allAnecdotes    
      return newstate
  }

  return state
}

export const voteForAnecdote = anecdote => {
  return async dispatch => {
    const {id,content} = anecdote
    anecdote = {...anecdote}
    anecdote.votes = anecdote.votes+1
    const updated = await anecdoteServices.update(anecdote)
    dispatch({
      type: 'VOTE',
      updated:updated
    })
  }
}

export const addNewAnecdote = content => {
  return async dispatch => {
    const saved = await anecdoteServices.createNew(asObject(content))
    dispatch({
      type: 'NEW',
      content: saved
    })
  }


}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const all = await anecdoteServices.getAll()
    dispatch({
      type: 'INITIALIZE_ANECDOTES',
      allAnecdotes: all
    })    
  }
}

export default anecdoteReducer
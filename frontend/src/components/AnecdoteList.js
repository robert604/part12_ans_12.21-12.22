import { connect } from "react-redux"
import { voteForAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"



const AnecdoteList = props => { 
    const vote = (anecdote) => {
        const {id,content} = anecdote
        props.voteForAnecdote(anecdote)
        props.setNotification(`You voted for: ${content}`,5)
    }

    let {anecdotes,filterText} = props
    anecdotes = (() => {
        if(filterText!=='') {
            const re = new RegExp(filterText)
            anecdotes = anecdotes.filter(anecdote => re.test(anecdote.content))
        }
        const newstate = [...anecdotes].sort((a,b)=>b.votes-a.votes)
        return newstate
    })()


    return(
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        anecdotes: state.anecdotes
    }
}

const mapDispatchToProps = {
    voteForAnecdote,
    setNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps,mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList
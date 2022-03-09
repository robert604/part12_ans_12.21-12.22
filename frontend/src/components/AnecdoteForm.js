import { connect } from "react-redux"
import { addNewAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = (props) => {
    const createNew = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote_text.value
        event.target.anecdote_text.value = ''
        props.addNewAnecdote(content)
        props.setNotification(`You added: ${content}`,5)
    }

    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={createNew}>
            <div><input name='anecdote_text'/></div>
            <button>create</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = {
    addNewAnecdote,
    setNotification
}

const ConnectedAnecdoteForm = connect(mapStateToProps,mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm
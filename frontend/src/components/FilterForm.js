import {connect} from 'react-redux'
import {setFilter} from '../reducers/filterReducer'

const FilterForm = props => {
  const filterTextChange = (event) => {
    props.setFilter(event.target.value)
  }

  return(
    <div>
      filter <input name='filterText' onChange={filterTextChange}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = {
  setFilter
}

const ConnectedFilterForm = connect(mapStateToProps,mapDispatchToProps)(FilterForm)

export default ConnectedFilterForm
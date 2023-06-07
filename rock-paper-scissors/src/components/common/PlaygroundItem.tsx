import PropTypes from 'prop-types'

const PlaygroundItem = () => {
  return (
    <div className="playground-item playground-item--paper" ></div>
  )
}

PlaygroundItem.propTypes = {
    name: PropTypes.string.isRequired
}


export default PlaygroundItem
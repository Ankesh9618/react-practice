import PropTypes from 'prop-types'
function UserGreeting(props){
    const welcomeMessage = <h1 className="welcome-message">Hello {props.userName}</h1>
    const loginPrompt = <h1 className="login-prompt">Please login correctly</h1>
    return(props.isLoggedIn ? welcomeMessage:loginPrompt) 
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps= {
    isLoggedIn: false,
    userName: "Guest",
}
export default UserGreeting;
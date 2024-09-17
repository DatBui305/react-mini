import PropTypes from 'prop-types';
function UserGreeting(props) {
    // if (props.isLoggedIn) {
    //     return <h2>Welcome back {props.username}</h2>
    // }
    // else {
    //     return <h2>Please log in to continue</h2>
    // }
    // return (props.isLoggedIn ? <h2 className="welcome-message">Welcome back {props.username}</h2> :
    //  <h2 className="login-prompt">Please log in to continue</h2>)
    const welcomeMessage = <h2
        className="welcome-message">Welcome back {props.username}
    </h2>
    const loginPrompt = <h2
        className="login-prompt">Please log in to continue
    </h2>
    return (props.isLoggedIn ? welcomeMessage : loginPrompt)

}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guess",
}
export default UserGreeting;
/*
.welcome-message {
    font-size: 2.5em;
    background-color: hsl(120, 100%, 42%);
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin: 0;
}

.login-prompt {
    font-size: 2.5em;
    background-color: hsl(0, 100%, 42%);
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin: 0;
}
*/

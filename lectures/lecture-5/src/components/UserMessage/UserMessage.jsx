import styles from "./UserMessage.module.css"
import propTypes from 'prop-types'

const UserMessage = (props) => {

    const welcomMessage = <div className={styles.messageBox}>Welcome back, {props.userName}!</div>;
    const loginRequest = <div className={styles.messageBox}>Please log in to continue.</div>;


    return(props.loggedIn ? welcomMessage : loginRequest);
}

UserMessage.propTypes = {
    loggedIn: propTypes.bool,
    userName: propTypes.string,
}

UserMessage.defaultProps = {
    userName: "User",
}

export default UserMessage;
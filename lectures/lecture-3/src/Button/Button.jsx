import styles from "./Button.module.css"

const Button = () => {

    const buttonStyle = {
        backgroundColor: "#FF5D73", // Indian Rose color
        color: "white",
        border: "none",
        padding: "10px 20px",
        margin: "0 7vw",
        borderRadius: "5px",
        fontFamily: "Arial, sans-serif",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-color 0.3s ease, transform 0.2s ease",
      };

    return(
        <>
        <button className={styles.button}>Click Me!</button>
        <button style={buttonStyle}>Click Me!</button>
        </>
    );
}  

export default Button;
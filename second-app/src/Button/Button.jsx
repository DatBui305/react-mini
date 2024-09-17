// import styles from './Button.css';
function Button() {
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "red",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    return (<button style={styles}>Click me</button>);
}
export default Button;
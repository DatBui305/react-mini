import PropTypes from 'prop-types'
function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false,
}
export default Student;
/*
.student {
    font-family: Arial, sans-serif;
    font-size: 2em;
    padding: 10px;
    border: 1px solid hsla(0, 0%, 50%, 0.8);
}

.student p {
    margin: 0;
}
*/
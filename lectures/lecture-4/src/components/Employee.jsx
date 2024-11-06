import PropTypes from 'prop-types';

function Employee({ name, position, age }) {
  return (
    <div style={styles.employeeCard}>
      <h2>{name}</h2>
      <p>Position: {position}</p>
      <p>Age: {age}</p>
    </div>
  );
}

Employee.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  age: PropTypes.number,
};

Employee.defaultProps = {
  name: "Unnamed Employee",
  position: "Not specified",
  age: 18,
};

const styles = {
  employeeCard: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    margin: "10px",
    maxWidth: "200px",
    heigh: "200px",
    textAlign: "center",
    display: "inline-block"
  },
};

export default Employee;

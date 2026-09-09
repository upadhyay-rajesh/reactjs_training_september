
import PropTypes from 'prop-types';

function EmployeeComponent(props) {
    var name = props.name;
    var email = props.email;
    var age = props.age;
    return ( 
        <div>
            <h2>Employee Details</h2>
            <p>EMPLOYEE NAME: {name}</p>
            <p>EMPLOYEE EMAIL: {email}</p>
            <p>EMPLOYEE AGE: {age}</p>
        </div>
     );
}

EmployeeComponent.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
    
};

export default EmployeeComponent;
import PropTypes from 'prop-types';

function Button(props){
    const valueHolder = props.valueHolder; 
    return(
        <>
            <button className='buttons'>{valueHolder}</button>
        </>
    )
}

Button.propTypes= {
    valueHolder: PropTypes.string
}

export default Button;
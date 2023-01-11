import React from 'react';

const ContainerHeight = (props) => {

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            props.setHeight(event.target.value);
        }
    }

    return (

        <form>
            <label>adjust height:
                <input type="number" onKeyDown={handleKeyPress} />
            </label>
        </form>

    );
};

export default ContainerHeight;
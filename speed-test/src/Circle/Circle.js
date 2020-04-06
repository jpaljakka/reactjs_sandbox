import React from 'react';
import "./Circle.css"

const Circle = (props) => {

    return (
        <>
            <div className={"circles" + (props.active ? ' active' : '')}
                onClick={props.circleClick}
                style={{ backgroundColor: props.active ? props.active : props.buttonColor }}>

            </div>
        </>
    )

}

export default Circle
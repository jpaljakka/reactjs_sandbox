import React from 'react';

const Vote = ({positive, negative}) => {
    if (negative === 0 && positive === 0) {
        return(

            <div> No votes yet</div>
            
            )
    } else{

        return (
            <div>
            <h1>Votes</h1>
            <h2>Thumbsup: {positive}</h2>
            <h2>Thumbsdown: {negative}</h2>
        </div>
    );
}
}

export default Vote;

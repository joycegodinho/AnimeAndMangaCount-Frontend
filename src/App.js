import React from 'react';
import ReactDOM from 'react-dom';

import Pages from '/pages';

const App = () => {
    return(
        <div>
            <Pages />
        </div>
    );
};

//to render our application within the element with an ID of root 
ReactDOM.render(<App />, document.getElementById('root'));
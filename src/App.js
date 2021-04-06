import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from '/components/GlobalStyle';
import Pages from '/pages';

const App = () => {
    return(
        <div>
            <GlobalStyle />
            <Pages />
        </div>
    );
};

//to render our application within the element with an ID of root 
ReactDOM.render(<App />, document.getElementById('root'));
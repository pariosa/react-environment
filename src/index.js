import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from "react-redux";
import store from './js/store/store';


window.store = store;

function Layout (){
    return (
        <Provider store={ store }>
           <div className="Layout">
                  Hello World
            </div>
        </Provider>
    )

}

ReactDOM.render(
    React.createElement(Layout,null),
    document.getElementById('app')
);
module.hot.accept();

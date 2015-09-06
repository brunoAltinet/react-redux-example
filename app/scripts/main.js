import 'babel-core/polyfill';
import React from 'react';
import History from 'react-router/lib/HashHistory';
import ApiClient from './ApiClient';
import universalRouter from './universalRouter';
import configureStore from './redux/create';
import Location from 'react-router/lib/Location';
import injectTapEventPlugin  from "react-tap-event-plugin";

window.onerror = function(message, url, line) {
    alert(message + "\n" + url + ":" + line);
};

function startApp(){
    const history=new History();
    const client=new ApiClient();
    const store = configureStore(client);
    const location = new Location(document.location.pathname);
    injectTapEventPlugin();
    universalRouter(location, history, store)
        .then(({component}) => {
            if (__DEVTOOLS__) {
                const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
                console.info('Maybe you will see a "Warning: React attempted to reuse markup in a container but the checksum was' +
                    ' invalid." message. That\'s because the redux-devtools are enabled.');
                React.render(<div>
                    {component}
                    <DebugPanel top right bottom key="debugPanel">
                        <DevTools store={store} monitor={LogMonitor}/>
                    </DebugPanel>
                </div>, document.body);
            } else {
                React.render(component, document.body);
            }
        }, (error) => {
            console.error(error);
        });

    if (process.env.NODE_ENV !== 'production') {
        window.React = React; // enable debugger
    }
}


/* If mobile device, wait for Cordova's device APIs to be loaded
   an ready for acces
 */
window.onload = function(){
    var url = document.URL;
    var isSmart = (url.indexOf("http://") === -1 && url.indexOf("https://") === -1);
    if( isSmart ){
        //alert('isSmart')
        document.addEventListener('deviceready', startApp, false);
    }
    else{
        startApp();
    }
}

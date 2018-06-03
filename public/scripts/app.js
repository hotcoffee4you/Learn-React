"use strict";

//functional component
function Welcome(props) {
    return React.createElement(
        "p",
        null,
        "Welcome ",
        props.name
    );
}

var element = React.createElement(Welcome, { name: "Neekhil" });

//Rendering Welcome Component
ReactDOM.render(element, document.getElementById('app'));

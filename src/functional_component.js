//functional component
function Welcome(props){
    return <p>Welcome {props.name}</p>
}

const element = <Welcome name="Neekhil"/>;

//Rendering Welcome Component
ReactDOM.render(element, document.getElementById('app'));
// Converting functional component into class component 

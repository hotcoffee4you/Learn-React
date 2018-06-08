class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state={name: 'Neekhil'}
    }
    render(){
        return<p>{this.state.name}</p>;
    }
};
ReactDOM.render(<Welcome />, document.getElementById('app'));
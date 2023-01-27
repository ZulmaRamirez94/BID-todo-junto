import { Component } from "react";


class MiComponentPerson extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: parseInt(this.props.age)
        }
    }


    render() { 
        const { firstName, lastName, hairColor} = this.props;
        return (
            <>
                <div style={{marginBottom:"0%", textAlign:"left", fontSize:"20px"}} >
                    <h1 style={{textAlign:"left", fontSize:"35px"}}> {lastName}, {firstName} </h1>
                    <p style={{textAlign:"left", fontSize:"20px"}}> Age: {this.state.count} </p>  
                    <p>Hair Color: {hairColor}</p>
                    <button onClick={() => this.setState({count: this.state.count+1})} style={{marginTop: "5px", textAlign:"center", fontSize:"15px", width:"245px"}}>Birthday Button for {firstName} {lastName}</button>
                </div>
            </> );
    }
}
export default MiComponentPerson;    
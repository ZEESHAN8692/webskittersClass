import React, { act, Component } from 'react'

export default class CDU extends Component {
    constructor(){
        super()
        this.state={active:false, name:null , contact:null}

    }
    changeHandler=()=>{
        console.log("Active and Changing");
        this.setState(...this.state ,active:true); 
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate");
        if(this.state.name===null){
            this.setState({...this.state , name:"Zeeshan Khan" , contact:"1234567890"});
        }
    }
  render() {
    return (
      <div>ComponentDidUpdate</div>
    )
  }
}

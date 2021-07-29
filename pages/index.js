import React, {useState} from 'react';


function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Count/>
        </div>
    )
}

export default Home;

class Count extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter : 0
        };
        this.addOne = this.addOne.bind(this);
    }

    addOne(){
        this.setState((state) => {
            return {
                counter: state.counter + 1
            }
        })
    }

    render(){
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.addOne}>Adicionar</button>
            </div>
        )
    }

}
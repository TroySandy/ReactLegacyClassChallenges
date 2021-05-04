import React from 'react';


export default class ToDoDisplay extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            ToDoList: [],
            newItem: ''
        }
    }









MarkAsComplete = (e) => {
    this.setState ({
        complete: true
    })
}

    render(){
        return (
            <div>
                <form>
                    <input type='text' />
                </form>
                {props.ToDoList.map((ToDo) => {
                    return (
                    <div>
                        <li>{ToDo}</li>
                        <button onClick={this.MarkAsComplete}>Mark as Complete</button>
                    </div>
                    )
                })}
            </div>
        )
    }
}
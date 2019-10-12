'use strict';


class Header extends React.Component {
    render() {
        return(
            <div>
                <h1># of TO DOs on my list: {this.props.todoCount}</h1>
            </div>
        )
    }
}

class TaskList extends React.Component {
    render() {
        return(
            <div>TaskList component
                {this.props.todoList.map((task, index) => {
                    return(
                        <Task
                        task={task}
                        key={index} />
                    )
                })}
            </div>
        )
    }
}

class Task extends React.Component {
    render() {
        return(
                <div>
                    {this.props.task.description}
                    <input type='checkbox' />
                </div>

        )
    }
}

class IndexView extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            todoList: [],
            todoCount: 0,
            description: '',
            complete: false
        }
    }

    handleChange = (event) => {
        this.setState( {description: event.target.value} )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            description: this.state.description,
            complete: this.state.complete
        }
        //console.log(newTask);
        const updatedTodoList = [newTask, ...this.state.todoList]
        //console.log(updatedTodoList);
        const updatedCount = updatedTodoList.length
        //console.log(updatedCount);
        this.setState({
            todoList: updatedTodoList,
            todoCount: updatedCount,
            description: ''
        })
        console.log(this.state.todoList);
        console.log(this.state.todoCount);
    }

    render() {
        return (
            <div>
                <Header todoCount={this.state.todoCount} />
                <TaskList todoList={this.state.todoList} />
                <form onSubmit={this.handleSubmit}>
                    <input
                    type='text'
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder='Add another task' />
                    <input type='submit' value='Add' />
                </form>
            </div>
        );
    }
}

ReactDOM.render(
  React.createElement(IndexView),
  document.querySelector('.sample')
);

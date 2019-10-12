'use strict';


class Header extends React.Component {
    render() {
        return(
            <div>
                <h1>TO DOs</h1>
            </div>
        )
    }
}

class TaskList extends React.Component {
    render() {
        return(
            <h3>TaskList component</h3>
        )
    }
}


class IndexView extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        description: '',
        complete: false
    }
  }
  render() {
    return (
        <div>
            <Header />
            <TaskList />
            <form>
                <input
                type='text'
                value={this.state.description}
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

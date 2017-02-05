import * as React from 'react'
import {Component} from 'react'

export class Todo {
    constructor(public id: number, public text: string) {
    }
}

//---------------------------
// TODO 1アイテム
//---------------------------
interface TodoProps{
    todo:Todo
}
class TodoComponent extends Component<TodoProps, {}> {
    constructor(props: TodoProps) {
        super(props)
    }
    render(){
      return (
          <li>
            {this.props.todo.text}
          </li>
          )
      }
}

//---------------------------
// TODOリスト
//---------------------------
interface TodoListState{
    todos:Todo[]
}
export default class TodoListComponent extends Component<{}, TodoListState> {
    constructor() {
        super()
        this.state = { todos: [new Todo(1,'タスク1'),new Todo(2,'タスク2')]}
    }
    render(){
      var todos = this.state.todos.map(x => <TodoComponent key={x.id} todo={x}/>)
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        )
      }
}
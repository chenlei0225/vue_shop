/**
 * Created by Administrator on 2019/3/11 0011.
 */
export default {
  getTodos(){
    return JSON.parse(localStorage.getItem('todo_key')||'[]')
  },
  setTodos(todos){
    localStorage.setItem('todo_key',JSON.stringify(todos))
  }
}

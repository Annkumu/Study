/*
使用localstorage存储数据工具模块
1.函数  1个
2.对象  多个
    需要向外暴露一个功能还是多个功能
*/
const TODOS_KEY = 'todos_key'
export default{
    saveTodos(todos){
        windows.localStorage.setItem('todos_key',JSON.stringify(todos))
    },
    readTodos(){
        return JSON.parse(window.localStorage.getItem('todos_key') ||'[]' )
    }
}
<template>
  <div class="todo-container">
      <div class="todo-wrap">
            <!-- <TodoHeader @addTodo="addTodo"/>给TodoHeader标签对象绑定addTodo事件监听 -->
            <TodoHeader ref="header"/>
            <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
            <!-- <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/> -->
            <todo-footer>
                <input type="checkbox" v-model="isAllCheck" slot="checkAll">
                <span slot="count">已完成{{completeSize}}/全部{{todos.length}}</span>
                <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos" slot="delete">清楚已经完成任务</button>
            </todo-footer>
      </div>
  </div>
</template>
<!--
绑定事件监听    --订阅消息
触发事件        --发布消息
-->
<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList   from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import storageUtil from './util/storageUtil'
export default {
        data(){
            return{
                //从localstorage读取todos
                todos: storageUtil.readTodos
            }
        },
            computed:{
        completeSize(){
            return this.todos.reduce((preTotal,todo) => preTotal +(todo.complete?1:0),0) 
        },
        isAllCheck:{
            get(){
                return this.completeSize=== this.todos.length && this.completeSize>0
            },
            set(value){ //value 是当前checkbox最新的值
                this.selectAllTodos(value)
            }
        }
    },
        mounted(){//执行异步代码
            //给Todoheader绑定addTodo事件监听
            //this.$on('addTodo',this.addTodo)//给app绑定事件了
            this.$refs.header.$on('addTodo',this.addTodo)
            //订阅消息
             
        },
        methods:{
            addTodo(todo){
                this.todos.unshift(todo)
            },
            deleteTodo(index){
                this.todos.splice(index,1)
            },
            //删除所有选中
            deleteCompleteTodos(){
            this.todos = this.todos.filter(todo => !todo.complete)
            },
            //全选/全不选
            selectAllTodos(check){
                this.todos.forEach(todo => todo.complete = check)
            }
        },

        watch:{ //监视
            todos:{
                deep:true,//深度监视
                // handler:function(value){
                //     //将todos最新的值的json数据，保存到localStorage
                //    // window.localStorage.setItem('todos_key',JSON.stringify(value))
                //    storageUtil.saveTodos(value)
                // }
                handler:storageUtil.saveTodos
            }
        },
        components:{
            TodoHeader,
            TodoList,
            TodoFooter
        }
}
</script>

<style>


/* app */

.todo-container{
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}



</style>
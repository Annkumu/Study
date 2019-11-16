<template>
<div>
<p>ID:{{$route.params.id}}</p>
<ul>
    <li>id:{{messageDetail.id}}</li>
    <li>title:{{messageDetail.title}}</li>
    <li>content:{{messageDetail.content}}</li>
</ul>
</div>
</template>

<script>

export default
 {
     data(){
         return{
             messageDtail:{}
         }
     },
     mounted(){
         setTimeout(() => {
const allMessageDetails = [
    {
                    id:1,
                    title:'messages001',
                    content:'message001 content.....'
                },
                {
                    id:2,
                    title:'messages002',
                    content:'message002 content.....'
                },
                {
                    id:3,
                    title:'messages003',
                    content:'message003 content.....'
                },
                {
                    id:4,
                    title:'messages003',
                    content:'message003 content.....'
                }   
]
 this.allMessageDetails = allMessageDetails
 const id = this.$route.params.id*1
 this.messageDetail = allMessageDetails.find(detail => detail.id===id)
         },1000)
     },
     watch: {
         $route: function(value) {   //路由路径（param）发生改变
        const id = value.params.id*1
        this.messageDetail = this.allMessageDetails.find(detail => detail.id===id)
         }
     }
 }
</script>

<style>

</style>
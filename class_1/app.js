  new Vue({
   el:'#app',
   data:{
       name: 'Sajedul Islam khairul',
       
   },
   methods:{
       Myage(){
           return 'learn sajedul';
       },
       Myname(age){
        return `${this.name} with suly, my age is ${age}`
    }
   }

})
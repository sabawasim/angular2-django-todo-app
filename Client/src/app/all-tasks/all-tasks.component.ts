import { Component, OnInit,OnChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';
import  'jquery'
declare var $;
@Component({
  selector: 'all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnChanges {
  constructor(private http: HttpClient,private router:Router) {
    if (localStorage.getItem("login_data")==null)
    {
      this.router.navigate(['/']);
    }
    
    else{
      this.login_data = JSON.parse(localStorage.getItem("login_data"))
          this.header=new HttpHeaders(
      
          {'Content-Type': 'application/json','Authorization': 'Token ' + this.login_data.token}); 
        
          }
  }
login_data:any;
all_tasks:any;
header:any;
my_tasks=false;
done_task=false;
add_task_success=false;
add_task_error=false;
users:any;
del_task_msg=false;
del_task_error=false;
edit_task_success=false;
message="";

name1="";
description1="";
assigned_to1="";
status1="";
id="";
  ngOnInit() {
    this.allTasks();
    this.allUsers();
  }
  ngOnChanges()
  {

  }
  addTask(){
    $("#myModal").modal()
  }

  deleteTask(id){
    this.http.post('http://localhost:8000/todo_app/delete-task/',{id:id},{headers:this.header}).map(
        (res) => {
            return res
        }).subscribe(res=>{
          if(res['success']){
            this.del_task_msg=true;
            setTimeout(()=>{
              this.del_task_msg = false;
         }, 3000);
            this.allTasks();
          }
          else{
          this.message = res['message'];
            this.del_task_error=true;
          setTimeout(()=>{
            this.del_task_error = false;
       }, 3000);
          this.allTasks();
          }
          
        });
  }
  sumbitNewTask(name,description,status,assigned_to){
    console.log(name,description)
    if (name.trim().length>0 && description.trim().length>0){
      let data_obj={"name":name,"description":description,"status":status,"assigned_to":assigned_to};
      this.http.post('http://localhost:8000/todo_app/add-task/',data_obj,{headers:this.header}).map(
        (res) => {
            return res
        }).subscribe(res=>{
          if(res['success']){
            this.allTasks();
            this.my_tasks=false;
            this.done_task=false;
            this.add_task_success=true;
            $('#myModal').modal('hide');
            setTimeout(()=>{    //<<<---    using ()=> syntax
              this.add_task_success = false;
         }, 3000);
  
          }
          
          
        });
    }
    else{
      this.add_task_error=true;
      $('#myModal').modal('hide');
      setTimeout(()=>{    //<<<---    using ()=> syntax
        this.add_task_error = false;
        $('#myModal').modal();
   }, 3000);
    }

  }
  allTasks(){
      this.http.get('http://localhost:8000/todo_app/view-all/',{headers:this.header}).map(
        (res) => {
            return res
        }).subscribe(res=>{
          this.all_tasks=res;
          
        });
  }
  allUsers(){
    this.http.get('http://localhost:8000/user_management/view-all/',{headers:this.header}).map(
      (res) => {
          return res
      }).subscribe(res=>{
        this.users=res;
        
      });
}

  selectTask(){
    this.my_tasks = !this.my_tasks;
    this.done_task=false;
    if (this.my_tasks){
      this.http.post('http://localhost:8000/todo_app/view-my-task/',{id:this.login_data.id},{headers:this.header}).map(
        (res) => {
            return res
        }).subscribe(res=>{
          this.all_tasks=res['tasks'];
          
        });
    }
    else{
      this.allTasks();
    }
  
  }

  doneTask(){
    this.done_task = !this.done_task;
    this.my_tasks=false;
    if (this.done_task){
      this.http.post('http://localhost:8000/todo_app/hide-all-done-task/',{},{headers:this.header}).map(
        (res) => {
            return res
        }).subscribe(res=>{
          if(res['tasks']){
            this.all_tasks=res['tasks'];
          }
        });
    }
    else{
      this.allTasks();
    }
  
  }

  editTask(obj){
    this.name1=obj.name;
    if (obj.assigned_to__username){
      this.assigned_to1 = obj.assigned_to__username;
    }
    else{
      this.assigned_to1 = obj.assigned_to.username;
    }
    this.status1 = obj.status;
    this.description1 = obj.description;
    this.id=obj.id;
    console.log(obj)
    $('#myModal1').modal();

  }


  submitEditTask(name,description,status,assigned_to){
    if (name.trim().length>0 && description.trim().length>0){
      let data_obj={"name":name,"description":description,"status":status,"id":this.id};
      this.http.post('http://localhost:8000/todo_app/edit-task/',data_obj,{headers:this.header}).map(
        (res) => {
            return res
        }).subscribe(res=>{
          if(res['success']){
            this.allTasks();
            this.my_tasks=false;
            this.done_task=false;
            this.edit_task_success=true;
            $('#myModal1').modal('hide');
            setTimeout(()=>{    //<<<---    using ()=> syntax
              this.edit_task_success = false;
         }, 3000);
  
          }
          else{
            this.message = res['message'];
            this.del_task_error=true;
            $('#myModal1').modal('hide');
          setTimeout(()=>{
            this.del_task_error = false;
       }, 3000);
          this.allTasks();
          }
          
          
        });
    }
    else{
      this.add_task_error=true;
      $('#myModal').modal('hide');
      setTimeout(()=>{    //<<<---    using ()=> syntax
        this.add_task_error = false;
        $('#myModal').modal();
   }, 3000);
    }

  }

  updateTask(task){

    this.http.post('http://localhost:8000/todo_app/markdone-task/',{id:task.id},{headers:this.header}).map(
      (res) => {
          return res
      }).subscribe(res=>{
        if(res['success']){
          this.allTasks();
          this.my_tasks=false;
          this.done_task=false;
          this.edit_task_success=true;
          setTimeout(()=>{    //<<<---    using ()=> syntax
            this.edit_task_success = false;
       }, 3000);

        }
        else{
          this.message = res['message'];
          this.del_task_error=true;
        setTimeout(()=>{
          this.del_task_error = false;
     }, 3000);
        this.allTasks();
        }
        
        
      });
  }


}

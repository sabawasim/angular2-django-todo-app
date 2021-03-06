import { Component, OnInit,OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {CONSTANTS} from '../constants';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient,private router:Router,private cons:CONSTANTS) { }
  login_result=false;
  login=true;
  register_result=false;
  register_result_data="";
  register_result_data_show=false;
  ngOnInit() {
  }

  ngOnChanges(){

  }
register(){
  this.login=false;
  this.login_result=false;
}
loginFunction(){
  this.login=true;
  this.login_result=false;
}
  submitUser(user,pass){
    this.register_result =false;
      return this.http.post(this.cons.SERVER_URL+'/user_management/login/',{'username':user,'password':pass}).subscribe((res:any) => {
        if (!res.success){
          this.login_result =true;
        }
        else{
          localStorage.setItem('login_data', JSON.stringify(res));
          this.router.navigate(['all-tasks/'])
          this.login_result =false;
        }

     });
  
  }

  registerUser(user,pass,email,dept,desig){
    
    return this.http.post(this.cons.SERVER_URL+'/user_management/create-user/',{'username':user,'password':pass,'email':email,'department':dept,'designation':desig}).subscribe((res:any) => {
      if (res.success){
        this.register_result =true;
        this.login=true;
      }
      else
      {
        this.register_result_data_show=true;
          this.register_result_data =res['message'];
          this.login=false;
      
      }

   });

}
}

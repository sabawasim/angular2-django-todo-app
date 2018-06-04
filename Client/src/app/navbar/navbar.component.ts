import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';
import  'jquery'
declare var $;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
  
  ngOnInit() {
    
  }

}

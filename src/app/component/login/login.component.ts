import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{


  loginForm!: FormGroup; 

  constructor(private http:HttpClient,private router:Router, private fb: FormBuilder,private common:CommonService){

  }

  loginRes:any;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email,Validators.required]],   
      password: ['', Validators.required],
    })
    
  }

  login(){
    var URL="https://admin.eniola.app/api/v1/login"
    this.http.post(URL,this.loginForm.value).subscribe((res:any)=>{
      this.loginRes = res;
      console.log("loginRes",this.loginRes.status);
      if(this.loginRes.status === 200){
       this.common.setData(this.loginRes.data);
       this.router.navigate(['/dashboard']);
      }
      
    })
  }

}

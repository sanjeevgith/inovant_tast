import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  loginData:any

  constructor(private http:HttpClient) { }


  setData(data:any){
    this.loginData = data;
  }


  getData(){
    return this.loginData;
  }



}

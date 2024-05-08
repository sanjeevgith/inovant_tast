import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private common:CommonService){

  }
  users:any


  ngOnInit(): void {
    this.users =  this.common.getData()
     
      console.log("getData Response=====>",this.users)
  



  }




}

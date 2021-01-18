import { Component, OnInit , AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterViewInit {

  sessionStatus=false
  userName = '';
  constructor() { }

  ngOnInit(): void {
    this.userName =sessionStorage.getItem('userName')
   
    console.log(this.sessionStatus);
    console.log(sessionStorage.getItem('userName'));
    
    
  }
   ngAfterViewInit(){
    if(this.userName != 'false' && this.userName != null && this.userName != undefined ){
      this.sessionStatus=true;
    }
   }
  

}

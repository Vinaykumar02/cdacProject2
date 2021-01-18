import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sessionStatus=false
  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem('this.userName')){
      this.sessionStatus=true;
    }
    console.log(this.sessionStatus);
    console.log(sessionStorage.getItem('this.userName'));
    
    
  }
  

}

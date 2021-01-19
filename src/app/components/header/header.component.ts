import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  sessionStatus=false
  userName = '';
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userName =sessionStorage.getItem('userName')
    if(this.userName != 'false' && this.userName != null && this.userName != undefined ){
      this.sessionStatus=true;
      // sessionStorage.setItem('reload','true')
    }
   
    console.log(this.sessionStatus);
    console.log(sessionStorage.getItem('userName'));
    if(sessionStorage.getItem('reload')!=='true'){
      sessionStorage.removeItem('reload');
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/header']);
  }); 
  }
    
  }
  
  

}

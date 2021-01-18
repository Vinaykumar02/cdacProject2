import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {} from '../../components/header/header.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  static count = 0

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    let home = window.location.toString()
    if(home.includes('home') && HomePageComponent.count < 1 ){
      HomePageComponent.count++;
      // window.location.reload();
    }
    // HeaderComponent.ngOnInit();
  }
  
  findPetDetails(){
    console.log("function called");
    
    this.router.navigate(['/pet_details'])
  }
}

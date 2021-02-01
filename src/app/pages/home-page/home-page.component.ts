import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {} from '../../components/header/header.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  a=false
  constructor(private router: Router) { }
 
 
  
  ngOnInit(): void {
    

    // this.reloadPage()
    // let home = window.location.toString()
    // if(home.includes('home') && HomePageComponent.count < 1 ){
    //   HomePageComponent.count++;
      // window.location.reload();
    // }
    // HeaderComponent.ngOnInit();
    // sessionStorage.clear();
    
    // do{
    //   window.location.reload()
    // }while(this.  a);
    // if(sessionStorage.getItem('reload')!=='true'){
    //   console.log(sessionStorage.getItem('reload'));

    //   sessionStorage.removeItem('reload')
    //   console.log("reload");
    //   console.log(sessionStorage.getItem('reload'));
    //   let a=true
    //   if(a){
    //     a=false;
    //   //  window.location.reload()
    //   }
    // }
  //   sessionStorage.removeItem('userName')
    
  }
  
  findPetDetails(){
    console.log("function called");
    
    this.router.navigate(['/pet_details'])
  }
}

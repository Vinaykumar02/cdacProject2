import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {AdminService} from '../../service/admin.service'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  alert:boolean = false;
  hide:boolean = true;
  userName = " ";
  userId : number;
 
  constructor(private _adminService : AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(myform:NgForm)
  {
    // this.login.getLoginCredential();
    console.log("form submited")
    console.log(myform.value)
    console.log(myform.value.userId)
    console.log(myform.value.pass)
    // invalide credential is suppose to be handle
    this._adminService.getLoginDetails(myform.value.userId).subscribe(data=>{
         sessionStorage.setItem('admin_name',data.userName);
         sessionStorage.setItem('admin_id',data.userId);

      // if(data.password == myform.value.pass)
      // {
      //   this.userName = data.userName;
      //   this.userName=myform.value.userId
        // sessionStorage.setItem('userName',myform.value.userId)
        // sessionStorage.setItem('userName',myform.value.userId)
        
        // this.router.navigate(['/']);
      //   this.router.navigate(['/']);

      //    window.location.reload()
      // }
    //   else{
    //   this.router.navigate(['/login'])
    // sessionStorage.setItem('userName','false')
    //     }
    })
    

  }

  closeAlert(){
    this.alert = false;
  }

  // getErrorMessage(){

  // }

}

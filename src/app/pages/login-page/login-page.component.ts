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

  hide:boolean = true;
  userName = " ";
  constructor(private _adminService : AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(myform:NgForm)
  {
    // this.login.getLoginCredential();
    console.log(myform.value);
    // console.log(myform.value);
    
    console.log("form submited")
    console.log(myform.value)
    console.log(myform.value.userId)
    console.log(myform.value.pass)
    // invalide credential is suppose to be handle
    this._adminService.getLoginDetails(myform.value.userId).subscribe(data=>{
      if(data.password == myform.value.pass)
      {
        this.userName = data.userName;
        this.router.navigate(['/']);
      }
      else
      this.router.navigate(['/login'])
    })
    

  }

}

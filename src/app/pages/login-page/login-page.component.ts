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
  userName = "";
  userId : number;
 
  constructor(private _adminService : AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(myform:NgForm)
  {
    console.log("form submited")
    console.log(myform.value)
    console.log(myform.value.emailId)
    console.log(myform.value.password)

      this._adminService.getLoginDetails(myform.value).subscribe(data=>{
        sessionStorage.setItem('userName',data.userName);
        sessionStorage.setItem('admin_id',data.id);
     console.log(data.userName);
     console.log(data.id);

    
        
        this.router.navigate(['/']);
  
    }, error=>{
      console.log(error);
      this.alert = true;
    })
    

  }

  closeAlert(){
    this.alert = false;
  }

 

}

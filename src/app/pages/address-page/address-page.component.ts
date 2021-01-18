import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import {AddressDetails} from '../../pojos/address-details';
@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css']
})
export class AddressPageComponent implements OnInit {

  states = ['Maharastra', 'Chattishgarh', 'Gujrat'];
  addressData = new AddressDetails("flatNumber","street","area","city","district","state","pincode")

  constructor(private _userService:UserService,private router:Router) { }


  ngOnInit(): void {
  }
  onSubmit(myform:NgForm){
    console.log("submitted");
    console.log(this.addressData);
    this._userService.postUserAddress(this.addressData).subscribe(result=>{
      console.log(result);
      this.router.navigate(['/'])
      
    })
    
  }
}

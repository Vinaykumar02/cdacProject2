import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
// import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import {AddressDetails} from '../../pojos/address-details';
import { DialogAdoptionComponent } from '../dialog-adoption/dialog-adoption.component';
@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css']
})
export class AddressPageComponent implements OnInit {


  // adopterId = sessionStorage.getItem('adopterId') || 0;
  // adopterId = sessionStorage.getItem('adopterId') || 0;

  states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattishgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh','Maharastra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajastahn', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal'];

  addressData = new AddressDetails(undefined, "","","","","","","")

  constructor(private _userService:UserService,private router:Router,public dialog: MatDialog,private _route: ActivatedRoute) { }
  // constructor(private _userService:UserService,private router:Router, private _route: ActivatedRoute) { }

  adopterId = this._route.snapshot.paramMap.get('userId') || null;
  // adopterName = +this._route.snapshot.paramMap.get('userName') || 0
  // petId = +this._route.snapshot.paramMap.get('petId') || 0
  adopterName = sessionStorage.getItem("userName");
  petId = sessionStorage.getItem("petId")

  ngOnInit(): void {
  }
  onSubmit(myform:NgForm){
    console.log("submitted");
    console.log(this.addressData);
    this._userService.postUserAddress(this.addressData, this.adopterId).subscribe(result=>{
      console.log(result);
      // sessionStorage.removeItem('petId');
      // sessionStorage.removeItem('adopterId');
      this.router.navigate(['/'])
      
    })
    let dialogRef = this.dialog.open(DialogAdoptionComponent , {
      data: { name: this.adopterName,petId: this.petId },
      width:"30%",
      height:"auto",
      disableClose: true,
      // closeOnNavigation: true
      
    });
    
    
  }
}

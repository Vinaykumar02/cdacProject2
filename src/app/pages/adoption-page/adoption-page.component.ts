import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {AdoptionModel} from '../../pojos/adoption-model'
import {UserService} from '../../service/user.service'
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-adoption-page',
  templateUrl: './adoption-page.component.html',
  styleUrls: ['./adoption-page.component.css']
})
export class AdoptionPageComponent implements OnInit {

  petId = sessionStorage.getItem('petId');

  adoptionForm = new AdoptionModel(undefined, "name","adhaar",0,"mobile","email",false)

  constructor (private router: Router,private _userService : UserService) { }

  ngOnInit(): void {
    
  }
  

  onSubmit(myForm:NgForm){
    console.log("Adopted");
    // RouterLink="address"
    console.log(this.adoptionForm);
    this._userService.postUserDetails(this.adoptionForm).subscribe(result=>{
      console.log(result);
      sessionStorage.setItem("adopterId", result);
      this.router.navigate(['/address']);
    })
    // this.router.navigate(['/address']);
  }
}

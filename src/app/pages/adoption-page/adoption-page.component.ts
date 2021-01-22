import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  petId = sessionStorage.getItem('petId') || 0;

  adoptionModel = new AdoptionModel(undefined, "","",0,"","",false)

  constructor (private fb: FormBuilder, private router: Router,private _userService : UserService) { }

  adoptionForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
    aadharNumber: ['', [Validators.required, Validators.pattern("[0-9]{12}")]],
    age: [0, [Validators.required, Validators.min(12)]],
    phoneNumber: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
    emailId : ['', [Validators.required, Validators.email]],
    petitionSigned: [true, Validators.required]
  }) 

  ngOnInit(): void {
    
  }
  
  get name(){
    return this.adoptionForm.get('name')
  }

  get aadharNumber(){
    return this.adoptionForm.get('aadharNumber')
  }

  get age(){
    return this.adoptionForm.get('age')
  }

  get phoneNumber(){
    return this.adoptionForm.get('phoneNumber')
  }

  get emailId(){
    return this.adoptionForm.get('emailId')
  }

  get petitionSigned(){
    return this.adoptionForm.get('petitionSigned')
  }
  
  getAdhaarNumberErrorMsg(){
    if(this.aadharNumber.hasError('required'))
      return "You must enter a value";
    else if(this.aadharNumber.hasError('pattern'))
      return "Adhaar number must be of 12 digits"
  }

  getEmailErrorMsg(){
    if(this.emailId.hasError('required'))
      return "You must enter a value";
    else if(this.emailId.hasError('email'))
      return "Please enter a valid email id";
  }

  getPhoneNumberErrorMsg(){
    if(this.phoneNumber.hasError('required'))
      return "You must enter a value";
    else if(this.phoneNumber.hasError('pattern'))
      return "Mobile number must be of 10 digits"
  }

  getNameErrorMsg(){
    if(this.name.hasError('required'))
      return "You must enter a value";
    else if(this.name.hasError('pattern'))
      return "Digits are not allowed in user name";
  }

  getAgeErrorMsg(){
    if(this.name.hasError('required'))
      return "You must enter a value";
    else if(this.name.hasError('min'))
      return "Your age should be minimum of 12 years to adopt a pet";
  }

  onSubmit(){
    console.log("Adopted");
    // RouterLink="address"
    console.log(this.adoptionForm);
    // this._userService.postUserDetails(this.adoptionForm).subscribe(result=>{
    //   console.log(result);
      // sessionStorage.setItem("adopterId", result);
    
    console.log(this.adoptionForm.value);
    this._userService.postUserDetails(this.adoptionForm.value, this.petId).subscribe(result=>{
      console.log(result);
      sessionStorage.setItem("adopterId", result.id);
      this.router.navigate(['/address']);
    })
    // this.router.navigate(['/address']);
  }
}

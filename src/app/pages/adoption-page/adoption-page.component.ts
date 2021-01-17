import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-adoption-page',
  templateUrl: './adoption-page.component.html',
  styleUrls: ['./adoption-page.component.css']
})
export class AdoptionPageComponent implements OnInit {

 

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  

  onSubmit(myForm:NgForm){
    console.log("Adopted");
    // RouterLink="address"
    this.router.navigate(['/address']);
  }
}

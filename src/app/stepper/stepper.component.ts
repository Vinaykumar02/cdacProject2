import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      firstCtrl: [''],
      secondCtrl: [''],
      thirdCtrl: [0],
      fourthCtrl: [''],
      fifthCtrl: [''],
      sixthCtrl: [false]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['']
    });
  }

  onSubmit(myForm: NgForm){
    console.log("form submitted");
  }

}

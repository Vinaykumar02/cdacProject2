import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css']
})
export class AddressPageComponent implements OnInit {

  states = ['Maharastra', 'Chattishgarh', 'Gujrat'];
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(myform:NgForm){
    console.log("submitted");
  }
}

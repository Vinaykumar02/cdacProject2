import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import {Pet} from './pet'

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  petModel= new Pet("dog","pamerian","female",false,"pune","picture"," puppie");
  constructor(private _adminService : AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(myform : NgForm){
    console.log("new post submitted");
    console.log(this.petModel)
     this._adminService.postPetDetails(this.petModel).subscribe(result=>{
       console.log(result);
       this.router.navigate(['/pet_details'])
     })

  }
}

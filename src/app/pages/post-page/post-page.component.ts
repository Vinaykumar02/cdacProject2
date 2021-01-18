import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import {Pet} from '../../pojos/pet'
import { User } from '../../pojos/user';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  fileAttr = "Choose File"
  selectedFile: File = null;
  message: string = null;
  retrievedImage: any;
  userId = sessionStorage.getItem('admin_id');

  petModel= new Pet(undefined,"","","",false,"","","");
  // petModel= new Pet("dog","pamerian","female",false,"pune","picture"," puppie");
  constructor(private _adminService : AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  uploadFileEvt(evt){
    if (evt.target.files && evt.target.files[0]) {
      this.fileAttr = '';
      // Array.from(evt.target.files).forEach((file: File) => {
      //   this.fileAttr += file.name + ' - ';
      // });

    console.log(evt);
    this.selectedFile = evt.target.files[0];
  }else {
    this.fileAttr = 'Choose File';
  }
}

  onSubmit(myform : NgForm){
    console.log("new post submitted");
    console.log(this.petModel)
     this._adminService.postPetDetails(this.selectedFile, this.petModel, this.userId).subscribe(result=>{
       console.log(result);
       this.router.navigate(['/pet_details'])
     }, error=>{

      this.router.navigate(['/**'])
     })

  }
}

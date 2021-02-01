import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  petModel= new Pet(undefined,"","","","",false,"","");
  postForm: any;
  // petModel= new Pet("dog","pamerian","female",false,"pune","picture"," puppie");
  constructor(private _adminService : AdminService,private router:Router, private fb: FormBuilder) { }

  ngOnInit(): void {
     this.postForm = this.fb.group({
      animal: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      details: ['', Validators.required],
      adopted: [false, Validators.required],
     //  image: ['', Validators.required],
     //  imageContentType: ['', Validators.required]
   })

  }

  
  

  uploadFileEvt(evt){
    if (evt.target.files && evt.target.files[0]) {
      console.log(evt.target.files[0].name);
      this.fileAttr = evt.target.files[0].name;
      console.log(this.fileAttr);
      
      // Array.from(evt.target.files).forEach((file: File) => {
      //   this.fileAttr += file.name + ' - ';
      // });

    console.log(evt);
    this.selectedFile = evt.target.files[0];
  }else {
    this.fileAttr = 'Choose File';
  }
}

  onSubmit(){
    console.log("new post submitted");
    console.log(this.postForm.value,this.selectedFile)
     this._adminService.postPetDetails(this.selectedFile, this.postForm.value, this.userId).subscribe(result=>{
       console.log(result);
       this.router.navigate(['/pet_details'])
     }, error=>{

      this.router.navigate(['/**'])
     })

  }

  get animal(){
    return this.postForm.get('animal')
  }

  get gender(){
    return this.postForm.get('gender')
  }

  get city(){
    return this.postForm.get('city')
  }
  get details(){
    return this.postForm.get('details')
  }
  get adopted(){
    return this.postForm.get('adopted')
  }

}

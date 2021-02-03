import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-update-details-page',
  templateUrl: './update-details-page.component.html',
  styleUrls: ['./update-details-page.component.css']
})
export class UpdateDetailsPageComponent implements OnInit {
  postForm: any;
  userId = sessionStorage.getItem('admin_id');
  selectedPetId: number;


  constructor(private _adminService : AdminService,private router:Router, private fb: FormBuilder, private _route: ActivatedRoute) { }

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

   this.selectedPetId = +this._route.snapshot.paramMap.get('id');

   this._adminService.getPetById(this.selectedPetId)
     .subscribe(result => {
       this.postForm.patchValue({
         animal : result.animal,
         gender : result.gender,
         city : result.city,
         details : result.details,
         adopted : result.adopted,
       })
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

  onSubmit(){
    console.log("new post submitted");
    console.log(this.postForm.value)
     this._adminService.updatePetDetails(this.postForm.value, this.selectedPetId).subscribe(result=>{
       console.log(result);
       this.router.navigate(['/pet_details'])
     }, error=>{

      this.router.navigate(['/**'])
     })

  }
}

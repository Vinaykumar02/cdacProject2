import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pet } from 'src/app/pojos/pet';
import { AdminService } from 'src/app/service/admin.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-post-edit-delete-page',
  templateUrl: './post-edit-delete-page.component.html',
  styleUrls: ['./post-edit-delete-page.component.css']
})
export class PostEditDeletePageComponent implements OnInit {

  allPets : Pet[];
  petIdToBeUpdated = null;

  postForm = new FormGroup({ 
  animal: new FormControl('', Validators.required),
  gender: new FormControl('', Validators.required),
  city: new FormControl('', Validators.required),
  details: new FormControl('', Validators.required),
  adopted: new FormControl('', Validators.required)

  })

  constructor(private _adminService: AdminService, private _userService:UserService) { }

  ngOnInit(): void {
    this.getAllPetDetails()
  }

  getAllPetDetails(){
    this._userService.getPetList().subscribe(result=>{
         console.log(result);
         this.allPets = result;
       })
  }

  // onSubmit(){
  //   if(this.petIdToBeUpdated !== null){
  //     let pet = this.postForm.value
  //     pet.id = this.petIdToBeUpdated
  //     this._adminService.updatePet(pet)
  //     .subscribe(result =>{
  //       console.log(result);
        
  //       this.getAllPetDetails();
  //     })
  //   }
  //   else{return;}

  // }

  // loadPetToEdit(petId: string) {
	// 	this._adminService.getPetById(petId)
	// 		.subscribe(result => {
  //       this.petIdToBeUpdated = result;
	// 			this.postForm.setValue({animal:result.animal,gender:result.gender,city:result.city,details:result.details,adopted:result.adopted})
				
	// 		})
  // }

  deletePetDetails(petId: string) {
		this._adminService.deletePetById(petId).subscribe(successCode => {
				//this.statusCode = successCode;
				//Expecting success code 204 from server
        // this.statusCode = 204;
        console.log(successCode);
        
				this.getAllPetDetails();
			})
	}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/pojos/pet';
import { AdminService } from 'src/app/service/admin.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-pet-details-page',
  templateUrl: './pet-details-page.component.html',
  styleUrls: ['./pet-details-page.component.css']
})
export class PetDetailsPageComponent implements OnInit {

  userId = sessionStorage.getItem('admin_id') || null;
  animalName =['Horse','Dog','Cat','']
  cityName = ['pune','Raipur']
  collectionCopy : Pet[] = []
  collection : Pet[] = [
    // new Pet(1, "Horse","Male","pune","The one who run fast",false,"picture 1","jpg"),
    // new Pet(2, "Dog","Male","pune"," puppie",false,"picture 3","jpg"),
    // new Pet(3, "Cat","female","pune"," kitty",false,"picture 1","jpg")
    // new Pet(5, "Horse","Lipizzan","Male",false,"pune","picture 3","The one who run fast"),
    // new Pet(6, "Horse","Lipizzan","Male",false,"pune","picture 3","The one who run fast"),
    // new Pet(9, "Horse","Lipizzan","Male",false,"pune","picture 3","The one who run fast"),
    // new Pet(12, "Horse","Lipizzan","Male",false,"pune","picture 3","The one who run fast"),
    // new Pet(11, "Horse","Lipizzan","Male",false,"pune","picture 3","The one who run fast"),
    // new Pet(4, "Horse","Lipizzan","Male",false,"pune","picture 3","The one who run fast"),
    // new Pet(21, "Horse","Lipizzan","Male",false,"pune","picture 3","The one who run fast"),
  ];

  constructor(private _adminService: AdminService, private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this._userService.getPetList().subscribe(result=>{
      console.log(result);
      this.collection = result;
      this.collectionCopy = this.collection
    })  
  }

  // adopt(id){
  //   console.log(id);
  //   sessionStorage.setItem('petId',id);
  //   this.router.navigate(['/adopt']);
  // }

  // updatePetDetails(petId: string) {
	// 	this._adminService.getPetById(petId)
	// 		.subscribe(result => {
  //       // this.petIdToBeUpdated = result;
	// 			// this.postForm.setValue({animal:result.animal,gender:result.gender,city:result.city,details:result.details,adopted:result.adopted})
				
	// 		})
  // }

  deletePetDetails(petId: string) {
		this._adminService.deletePetById(petId).subscribe(successCode => {
				//this.statusCode = successCode;
				//Expecting success code 204 from server
        // this.statusCode = 204;
        console.log(successCode);
        
				// this.getAllPetDetails();
			})
	}

  public selectedAnimal;
  public valueSelected() {
    this.collectionCopy   = this.collection.filter(
      item => item.animal === this.selectedAnimal
    );}
  public selectedLocation;
  public valueSelected1(){
    this.collectionCopy   = this.collection.filter(
      item => item.city=== this.selectedLocation
    );
  }

}

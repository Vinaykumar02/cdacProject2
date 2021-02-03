import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/pojos/pet';
import { AdminService } from 'src/app/service/admin.service';
import { UserService } from 'src/app/service/user.service';
// import { resourceLimits } from 'worker_threads';


@Component({
  selector: 'app-pet-details-page',
  templateUrl: './pet-details-page.component.html',
  styleUrls: ['./pet-details-page.component.css']
})
export class PetDetailsPageComponent implements OnInit {

  // animalName =['Horse','Dog','Cat']
  // cityName = ['pune','Raipur']
  animalName = []
  cityName = []
  userId = sessionStorage.getItem('admin_id') || null;
  collectionCopy : Pet[] = []
  // collectionCity : Pet[] = []
  previousValue : string
  // collectionAnimal : Pet[] = []

  collection : Pet[] = [
    // new Pet(1, "Horse","Male","pune","The one who run fast",false,"picture 1","jpg"),
    // new Pet(2, "Dog","Male","pune"," puppie",false,"picture 3","jpg"),
    // new Pet(3, "Cat","female","Raipur"," kitty",false,"picture 1","jpg")
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
    this._userService.getAnimalName().subscribe(result=>{
      console.log(result);
      this.animalName = result;
    })
    this._userService.getPetCity().subscribe(result=>{
      console.log(result);
      this.cityName = result;
      
    })
    // this.collectionCopy = this.collection
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

  deletePetDetails(petId: any) {
		this._adminService.deletePetById(petId).subscribe(successCode => {
				//this.statusCode = successCode;
				//Expecting success code 204 from server
        // this.statusCode = 204;
        console.log(successCode); 
        
				// this.getAllPetDetails();
			})
	}

  
  public selectedLocation;
  public selectedAnimal;
  public valueSelected(animal) {
    
    this.actualFilter(animal.value, 'animal');
    // debugger;
    // this.collectionCopy   = this.collection.filter(
    //   item => item.animal=== this.selectedAnimal
    // );
  }
  public valueSelected1(city){
    this.actualFilter(city.value, 'city');
    // this.collectionCopy   = this.collection.filter(
    //   item => item.city=== this.selectedLocation
    // );
  } 
    public actualFilter(arr: any, value: string) {
    let newCollection = [];
    let alterCollection = this.collectionCopy
    if(value === this.previousValue){
     alterCollection = this.collection}
    else {
      alterCollection = this.collectionCopy
    }
    if (value === 'city' && arr.length > 0) {
      for (let index = 0; index < arr.length; index++) {
        for (let index1 = 0; index1 < alterCollection.length; index1++) {
          if (alterCollection[index1].city === arr[index]) {
            newCollection.push(alterCollection[index1]);
          }
        }
      }
    } else if (value === 'animal'  && arr.length > 0) {
      for (let index = 0; index < arr.length; index++) {
        for (let index1 = 0; index1 < alterCollection.length; index1++) {
          if (alterCollection[index1].animal === arr[index]) {
            newCollection.push(alterCollection[index1]);
          }
          
        }
        
      }
    }
    if (newCollection.length > 0) {
      this.collectionCopy = newCollection;}
    // } else{
    //   alert("No animal found, please change your filters")
    //   // this.collectionCopy = this.collection;
    // }
    this.previousValue = value;
    if (arr.length < 1 && newCollection.length < 1) {
      this.collectionCopy = this.collection;
    }
    // debugger
    // this.collectionCopy = [...this.collectionCopy];
  }


}

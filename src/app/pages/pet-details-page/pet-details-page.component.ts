import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Pet } from 'src/app/pojos/pet';
import { AdminService } from 'src/app/service/admin.service';
import { NotificationService } from 'src/app/service/notification.service';
import { UserService } from 'src/app/service/user.service';
import { DeleteConfirmationDialogeComponent } from '../../components/delete-confirmation-dialoge/delete-confirmation-dialoge.component'; 

@Component({
  selector: 'app-pet-details-page',
  templateUrl: './pet-details-page.component.html',
  styleUrls: ['./pet-details-page.component.css']
})
export class PetDetailsPageComponent implements OnInit {

  animalName = []
  cityName = []
  userId = sessionStorage.getItem('admin_id') || null;
  collectionCopy : Pet[] = []
  previousValue : string

  collection : Pet[] = [
   // new Pet(1, "Horse","Male","pune","The one who run fast",false,"picture 1","jpg"),
   // new Pet(2, "Dog","Male","pune"," puppie",false,"picture 3","jpg"),
   // new Pet(3, "Cat","female","Raipur"," kitty",false,"picture 1","jpg"),
   // new Pet(4, "Dog","female","BSP"," kitty",false,"picture 1","jpg"),
   // new Pet(5, "Giraffe","female","Durg"," kitty",false,"picture 1","jpg")
  ];

  constructor(private _adminService: AdminService, private _userService: UserService, private router: Router, private dialog : MatDialog, private notification: NotificationService) { }

  
  ngOnInit(): void {
    this._userService.getPetList().subscribe(result=>{
      // console.log(result);
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

    // this.getAnimalName();
    // this.getCityName();
    // console.log(this.animalName)
    // console.log(this.cityName)

    // this.collectionCopy = this.collection
  }


  getAnimalName(){
    this.animalName = this.collection.map(item =>item.animal)
      .filter((value, index, arr) => arr.indexOf(value) === index);
  }

  getCityName(){
   this.cityName = this.collection.map(item =>item.city)
      .filter((value, index, arr) => arr.indexOf(value) === index);
  }



  
  public selectedLocation;
  public selectedAnimal;

  public valueSelected(animal) {
    
    this.actualFilter(animal.value, 'animal');
   
  }


  public valueSelected1(city){
    this.actualFilter(city.value, 'city');
    // tuserNamehis.collectionCopy   = this.collection.filter(
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
  
  deleteConfirmation(id){
    console.log(this.collection.map(item =>item.animal)
    .filter((value, index, arr) => arr.indexOf(value) === index));
    this.dialog.open(DeleteConfirmationDialogeComponent , {
      data: { msg : "Are you sure to delete this record?" },
      width:"390px",
      panelClass: 'confirm-dialog-container',
      // height:"auto",
      disableClose: true,
    }).afterClosed().subscribe(res=>{
      console.log(res);
      if(res){
        //this.getAnimalName();
        // this.getCityName();
          this.collection.findIndex(()=>{
            for (let item of this.collection) {
              if(item.id == id)
                return;
            }
          })
          this.collection.splice(id, 1);
        this._adminService.deletePetById(id).subscribe(successCode => {
          console.log(successCode); 
          
          this._userService.getAnimalName().subscribe(result=>{
            console.log(result);
            this.animalName = result;
          })
          this._userService.getPetCity().subscribe(result=>{
           console.log(result);
            this.cityName = result;
           
          })

          this.notification.success('::Deleted Successfully!')
        })
      }
    });
  }
}
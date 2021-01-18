import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/pojos/pet';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-pet-details-page',
  templateUrl: './pet-details-page.component.html',
  styleUrls: ['./pet-details-page.component.css']
})
export class PetDetailsPageComponent implements OnInit {

  
  collection : Pet[] = [
    new Pet("Horse","Lipizzan","Male",false,"pune","picture 3","The one who run fast"),
    new Pet("Dog","German","Male",false,"pune","picture 1"," puppie"),
    new Pet("Cat","Ragdoll","female",false,"pune","picture 2"," kitty"),
    new Pet("Horse","Lipizzan","Male",false,"pune","picture 3","The one who run fast"),
    new Pet("Horse","Lipizzan","Male",false,"pune","picture 3","The one who run fast"),
    new Pet("Horse","Lipizzan","Male",false,"pune","picture 3","The one who run fast"),
    new Pet("Horse","Lipizzan","Male",false,"pune","picture 3","The one who run fast"),
    new Pet("Horse","Lipizzan","Male",false,"pune","picture 3","The one who run fast"),
    new Pet("Horse","Lipizzan","Male",false,"pune","picture 3","The one who run fast"),
    new Pet("Horse","Lipizzan","Male",false,"pune","picture 3","The one who run fast"),
  ];

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this._userService.getPetList().subscribe(result=>{
      console.log(result);
    })
  }

  adopt(){
    this.router.navigate(['/adopt']);
  }

}

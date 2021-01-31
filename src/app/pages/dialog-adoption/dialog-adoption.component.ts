import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MatDialogConfig,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddressPageComponent } from '../address-page/address-page.component';
@Component({
  selector: 'app-dialog-adoption',
  templateUrl: './dialog-adoption.component.html',
  styleUrls: ['./dialog-adoption.component.css']
})
export class DialogAdoptionComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<AddressPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,private router : Router) { }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogRef.close();
    this.router.navigate(['/']);
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-dialoge',
  templateUrl: './delete-confirmation-dialoge.component.html',
  styleUrls: ['./delete-confirmation-dialoge.component.css']
})
export class DeleteConfirmationDialogeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, 
    public dialogRef: MatDialogRef<DeleteConfirmationDialogeComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close(false);
  }
}

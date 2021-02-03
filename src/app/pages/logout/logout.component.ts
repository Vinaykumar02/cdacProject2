import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }
  // constructor(public dialog: MatDialog) { }
  // openDialog() {
  //   const dialogRef = this.dialog.open();

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  ngOnInit(): void {
    sessionStorage.clear();
    this.router.navigate(['/']).then(()=>{
      window.location.reload();
    })

  }

}

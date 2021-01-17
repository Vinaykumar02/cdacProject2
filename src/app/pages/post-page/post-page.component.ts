import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(myform : NgForm){
    console.log("new post submitted");
  }
}

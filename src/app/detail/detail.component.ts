import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  // component fields
  myForm:FormGroup;
  fieldErrors = [];
  toy:any = {};

  constructor( private fb:FormBuilder, private router:Router ) {

  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      id: '',
      model: '',
      name: '',
      theme: '',
      pieces: 0,
      purchaseYear: 0
    });
  }

  // return to list page
  showList():void {
    this.router.navigate(["list"]);
  }

}

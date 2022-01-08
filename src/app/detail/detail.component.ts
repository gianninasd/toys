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
    this.toy = JSON.parse(sessionStorage.getItem('toy'));
    console.log(`Current toy: ${this.toy.model}`);

    this.myForm = this.fb.group({
      id: '',
      model: '',
      name: '',
      theme: '',
      pieces: 0,
      purchaseYear: 0,
      location: ''
    });

    this.myForm.setValue(this.toy);
  }

  // handle form submission
  onSubmit(form: FormGroup) {
    console.info(`Update toy ${this.myForm.value.id}`);

    /*this.membersService.update(this.myForm.value, this.appData.user.loginName).subscribe(
      result => { this.handleUpdateResponse(result) },
      error => { this.handleUpdateResponse(error.error) }
    );*/
  }

  // return to list page
  showList():void {
    this.router.navigate(["list"]);
  }

}

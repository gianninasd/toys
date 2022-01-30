import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToysService } from '../toys.service';

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

  constructor( private fb:FormBuilder, private router:Router, private service:ToysService ) {

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

    this.service.update(this.myForm.value).subscribe(
      result => { this.handleUpdateResponse(result) },
      error => { this.handleUpdateResponse(error.error) }
    );
  }

  // reset all field validation error messages and highlights
  private resetErrors() {
    this.fieldErrors = [];
  }

  // handle result of update operation
  handleUpdateResponse(result: any) {
    this.resetErrors();

    if (result.status == "FAILED") {
      console.info(`Fields have errors!`);
      this.fieldErrors = result.errors;
    }
    else {
      // on success, show the listing screen
      this.router.navigate(["list"], { queryParams: { "showToast": "true" } });
    }
  }

  // return to list page
  showList():void {
    this.router.navigate(["list"]);
  }

}

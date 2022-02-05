import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor( private fb:FormBuilder, private route:ActivatedRoute,
    private router:Router, private service:ToysService ) {

  }

  ngOnInit(): void {
    let idToLoad = "";

    // retrive id from url params
    this.route.queryParams.subscribe(params => {
      idToLoad = params['id'];
    });

    console.log(`idToLoad: ${idToLoad}`);

    this.toy = JSON.parse(sessionStorage.getItem('toy'));
    console.log(`Current toy: ${this.toy.id}`);

    this.myForm = this.fb.group({
      id: '',
      model: '',
      name: '',
      theme: '',
      pieces: 0,
      purchaseYear: 0,
      location: ''
    });

    // if empty, then action=create, else load
    if (idToLoad == "") {
      this.toy = {
        id: '',
        model: '',
        name: '',
        theme: '',
        pieces: 0,
        purchaseYear: 0,
        location: ''
      };
      this.myForm.setValue(this.toy);
    }
    else {
      this.myForm.setValue(this.toy);
    }
  }

  // handle form submission
  onSubmit(form: FormGroup) {
    console.info(`Update toy ${this.myForm.value.id}`);

    if (this.myForm.value.id == "" ) {
      this.service.create(this.myForm.value).subscribe(
        result => { this.handleUpdateResponse(result) },
        error => { this.handleUpdateResponse(error.error) }
      );
    }
    else {
      this.service.update(this.myForm.value).subscribe(
        result => { this.handleUpdateResponse(result) },
        error => { this.handleUpdateResponse(error.error) }
      );
    }    
  }

  // reset all field validation error messages and highlights
  private resetErrors() {
    this.fieldErrors = [];
  }

  // handle result of update operation
  handleUpdateResponse(result: any) {
    this.resetErrors();

    if (result.statusCode == 400) {
      console.info(`Fields have errors!`);
      this.fieldErrors = result.body;
    }
    else if (result.statusCode == 500) {
      console.info(`Error! ${result.body.error}`);
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

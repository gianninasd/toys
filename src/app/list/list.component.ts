import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToysService } from '../toys.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // component fields
  records = [];

  constructor( private router:Router, private toysService:ToysService ) {

  }

  ngOnInit(): void {
    this.toysService.getData().subscribe( 
      result => {this.handleDataResponse(result)},
      error => {console.log('error result: ' + error)}
    );
  }

  // handle result of load remote call
  handleDataResponse( result:any ) {
    this.records = JSON.parse(result).body;
    console.log('result1: ' + result);
    console.log('result2: ' + result.statusCode);
    console.log('result3: ' + result.body);
  }

  // display the toy details
  show( toy:any ) {
    sessionStorage.setItem('toy',JSON.stringify(toy));
    this.router.navigate(["detail"], { queryParams: { "id": toy.id } });
  }

  // display the details component for item creation
  showCreate() {
    this.router.navigate(["detail"], { queryParams: { "id": "" } });
  }
}

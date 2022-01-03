import { Component, OnInit } from '@angular/core';
import { ToysService } from '../toys.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // component fields
  records = [];

  constructor( private toysService:ToysService ) {

  }

  ngOnInit(): void {
    this.toysService.getData().subscribe( 
      result => {this.handleDataResponse(result)},
      error => {console.log('result: ' + error)}
    );
  }

  // handle result of load remote call
  handleDataResponse( result:any ) {
    this.records = result;
    console.log('result: ' + result);
  }

}

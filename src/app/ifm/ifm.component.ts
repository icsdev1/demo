import { Component, OnInit } from '@angular/core';
import { IFM } from './ifm';


@Component({
  selector: 'app-ifm',
  templateUrl: './ifm.component.html',
  styleUrls: ['./ifm.component.css']
})
export class IfmComponent implements OnInit {
  ifm : IFM;

  state: boolean;


  constructor() { }

  ngOnInit(): void {
    this.getIFM();
  }



  getIFM():void{
    // this.ifm ={
    //   id : 45,
    //   metrics : ['Water' , 'Emission' , 'Energy'],
    //   attributes : ['Linen', 'RPET' , 'Cotton'],
    //   data : [ [34,56.6,78] , [23.4,67,34] , [67.4,78,89] ]
    // }
    this.ifm ={
      id : 45,
      metrics:[],
      attributes : ['Linen', 'RPET' , 'Cotton'],
      data : [[],[],[] ]
    }
  }



}

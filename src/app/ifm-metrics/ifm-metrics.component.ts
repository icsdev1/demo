import { Component, OnInit , Input } from '@angular/core';
import { Metric } from './metric';
import { IFM } from '../ifm/ifm';

@Component({
  selector: 'app-ifm-metrics',
  templateUrl: './ifm-metrics.component.html',
  styleUrls: ['./ifm-metrics.component.css']
})
export class IfmMetricsComponent implements OnInit {
  @Input() ifm : IFM ;

  metrics : Metric[];

  constructor() { }

  ngOnInit(): void {
    this.loadMetrics();
  }

  addMetric(name):void{
      this.ifm.metrics.push(name);
      var i : number;
      console.log(this.ifm)
      for (i = 0; i < this.ifm.attributes.length; i++){
        this.ifm.data[i].push(0.0);
      }
  }

  removeMetric(index):void{
      this.ifm.metrics.splice(index, 1);
      var i : number;
      for (i = 0; i < this.ifm.attributes.length; i++){
        this.ifm.data[i].splice(index,1);
      }
  }

  changeMetricSelection(name):void{
      const index = this.ifm.metrics.indexOf(name, 0);
      console.log('index = '+index);
      if (index > -1) {
        this.removeMetric(index);
      }else{
        this.addMetric(name);
      }
  }



  loadMetrics():void{
    this.metrics = [
      {
        id : 55,
        name : 'Water',
        type: 'ENV',
        selected : true
      },
      {
        id : 67,
        name : 'Fair Wage',
        type : 'SOCIAL',
        selected : false
      },
      {
        id:23,
        name:'Emission',
        type:'ENV',
        selected : false
      },
      {
        id:89,
        name:'Happiness',
        type:'SOCIAL',
        selected : true
      }
    ]
    var i : number;
    for (i = 0; i < this.metrics.length; i++){
       this.metrics[i].selected = this.ifm.metrics.includes(this.metrics[i].name);
    }
  }
}

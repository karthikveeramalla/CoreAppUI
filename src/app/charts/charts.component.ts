import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  methodologyCompliance: any = [
    { projectName: 'Test1', percentage: 34 },
    { projectName: 'Test2', percentage: 55 },
    { projectName: 'Test3', percentage: 90 },
    { projectName: 'Test4', percentage: 50 },
    { projectName: 'Test5', percentage: 65 }

  ];

  lstMethodologies:  any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.lstMethodologies  = this.methodologyCompliance;
  }

}

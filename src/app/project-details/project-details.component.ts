import { Component, OnInit } from '@angular/core';
import { get, uniqWith } from 'lodash';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  displayedColumns = ['priority', 'status', 'dateCreated', 'testNumber', 'testCurrency', 'testTime'];
  dataSource = DATA;

  spans: any = {};

  constructor() { 
    this.spans = Object.assign({}, {
      priority: this.spanDeep(['priority'], DATA),
      status: this.spanDeep(['priority', 'status'], DATA),
      dateCreated: this.spanDeep(['priority', 'status', 'dateCreated'], DATA)
    });
  }

  ngOnInit(): void {
  }

 spanDeep(paths: string[] | null, data: any[]):any {
    if (!paths!.length) {
      return [...data]
        .fill(0)
        .fill(data.length, 0, 1);
    }

    const copyPaths = [...paths!];
    const path = copyPaths.shift();

    const uniq = uniqWith(data, (a: any, b: any) => get(a, path!) === get(b, path!))
      .map((item: any) => get(item, path!));

    return uniq
      .map((uniqItem: any) => this.spanDeep(copyPaths, data.filter(item => uniqItem === get(item, path!))))
      .flat(paths!.length);
  }

  getRowSpan(path: string | number, idx: string | number) {
    return this.spans[path][idx];
  }

}

const DATA = [
  {priority: 'P1', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Undefined', dateCreated: '11/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Undefined', dateCreated: '11/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'New', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'New', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'New', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'New', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
]

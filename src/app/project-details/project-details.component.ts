import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { get, uniqWith } from 'lodash';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  displayedColumns = ['priority', 'status', 'dateCreated', 'testNumber', 'testCurrency', 'testTime'];
  dataSource = DATA;

  spans: any = {};

  // lstStages: any;
  // lstDeliveribles: any;
  // lstCheckLists: any;

  lstStages: any = [
    { StageId: 1, StageName: 'stage1' },
    { StageId: 2, StageName: 'stage2' },
    { StageId: 3, StageName: 'stage3' }
  ];

  lstDeliveribles: any = [
    { DelivebleId: 1, DelivebleName: 'Deliverable1' },
    { DelivebleId: 2, DelivebleName: 'Deliverable2' },
    { DelivebleId: 3, DelivebleName: 'Deliverable3' }
  ];

  lstCheckLists: any = [
    { CheckListId: 1, CheckListName: 'checklist1' },
    { CheckListId: 2, CheckListName: 'checklist2' },
    { CheckListId: 3, CheckListName: 'checklist3' }
  ];

  constructor(private Router: Router,private Service: ProjectService, public dialog: MatDialog) { 
    this.spans = Object.assign({}, {
      priority: this.spanDeep(['priority'], DATA),
      status: this.spanDeep(['priority', 'status'], DATA),
      dateCreated: this.spanDeep(['priority', 'status', 'dateCreated'], DATA)
    });
  }

  ngOnInit(): void {
  }

  GetStages(){
    this.lstStages = this.lstStages;
  // this.Service.GetStages().subscribe({
  //     next: (_lstStages) => {
  //       this.lstStages = _lstStages;
  //     },
  //     error: () => {
  //     },
  //     complete: () => {},
  // });
}

GetDeliveribles(){
  this.lstDeliveribles = this.lstDeliveribles;
  // this.Service.GetDeliveribles().subscribe({
  //     next: (_lstDeliveribles) => {
  //       this.lstDeliveribles = _lstDeliveribles;
  //     },
  //     error: () => {
  //     },
  //     complete: () => {},
  // });
}

GetCheckLists(){
  this.lstCheckLists = this.lstCheckLists;
  // this.Service.GetCheckLists().subscribe({
  //     next: (_lstCheckLists) => {
  //       this.lstCheckLists = _lstCheckLists;
  //     },
  //     error: () => {
  //     },
  //     complete: () => {},
  // });
}

  AddDeliverable()
  {
    const dialogRef = this.dialog.open(AddProjectDetailsDialog,{
      maxWidth: '100vw',
      width: '1200px',
      disableClose: true,
      data: { 
        type: "isDeliverable",
        lstStages: this.lstStages
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result ==true)
      {
       // this.isLoading = true;
       // this.GetMasterTickets();
      }
    });
  }

  AddCheckList()
  {
    const dialogRef = this.dialog.open(AddProjectDetailsDialog,{
      maxWidth: '100vw',
      width: '1200px',
      disableClose: true,
      data: { 
        type: "isCheckList",
        lstStages: this.lstStages,
        lstDeliveribles: this.lstDeliveribles
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result ==true)
      {
       // this.isLoading = true;
       // this.GetMasterTickets();
      }
    });
  }
  
  AddRole()
  {
    const dialogRef = this.dialog.open(AddProjectDetailsDialog,{
      maxWidth: '100vw',
      width: '1200px',
      disableClose: true,
      data: { 
        type: "isRole",
        lstStages: this.lstStages,
        lstDeliveribles: this.lstDeliveribles,
        lstCheckLists : this.lstCheckLists
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result ==true)
      {
       // this.isLoading = true;
       // this.GetMasterTickets();
      }
    });
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


@Component({
  selector: 'AddProjectDetailsDialog',
  templateUrl: 'AddProjectDetailsDialog.html',
  styleUrls: ['./project-details.component.css']
})
export class AddProjectDetailsDialog {

  isLoading: boolean;
  type!: string;
  lstStages!: any;
  lstDeliveribles!: any;
  lstCheckLists!: any;

  StageId!: number;
  DeliverableName!: string;
  DeliverableDesc!: string;

  DelivebleId!: number;
  CheckListName!: string;
  CheckListDesc!: string;
  AdjusterValue!: number;

  CheckListId!: number;

  constructor(
    public dialogRef: MatDialogRef<AddProjectDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.type = data.type;
      this.lstStages = data.lstStages;
      this.lstDeliveribles = data.lstDeliveribles;
      this.lstCheckLists = data.lstCheckLists;
      this.isLoading = false;
    }

    onSubmitDeliverable = async (formData: NgForm) => {
      if(formData.valid)
      {
        this.isLoading = true;
        console.log()
      }  
      
    }

    onSubmitCheckList = async (formData: NgForm) => {
      if(formData.valid)
      {
        this.isLoading = true;
        console.log()
      }  
      
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

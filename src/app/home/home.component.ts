import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Methodology } from '../models/Methodology';
import { Project } from '../models/Project';
import { ProjectSearch } from '../models/ProjectSearch';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projectSearch: ProjectSearch;
  lstMethodologies:  Methodology[] = [];
  
  lstProjects: Project[] = [];
  dsProjects: MatTableDataSource<Project> = new MatTableDataSource<Project>(this.lstProjects);
  dcProjects: string[] = ['ProjectId','ProjectName','ProjectDescription','PercentCompliant','Evoluation','ProjectGoLiveDate'];
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

 
  methodologies: any = [
    { MethodologyId: 1, MethodologyName: 'Test1' },
    { MethodologyId: 2, MethodologyName: 'Test2' },
    { MethodologyId: 3, MethodologyName: 'Test3' }
  ];

  

  projects: any = [
    {ProjectId: "PA-101", ProjectName: "Provider life cycle", ProjectDescription: "Provides Platform migration to sales force", PercentCompliant: "96", Evoluation: "Meets Expectations", ProjectGoLiveDate: new Date()},
    {ProjectId: "CMS-P2", ProjectName: "CMS(Agile)", ProjectDescription: "Health Information Access for patients, Providers", PercentCompliant: "98", Evoluation: "Meets Expectations", ProjectGoLiveDate: new Date()},
    {ProjectId: "PA-101", ProjectName: "Provider life cycle", ProjectDescription: "Provides Platform migration to sales force", PercentCompliant: "96", Evoluation: "Meets Expectations", ProjectGoLiveDate: new Date()},
    {ProjectId: "CMS-P2", ProjectName: "CMS(Agile)", ProjectDescription: "Health Information Access for patients, Providers", PercentCompliant: "98", Evoluation: "Meets Expectations", ProjectGoLiveDate: new Date()},
    {ProjectId: "PA-101", ProjectName: "Provider life cycle", ProjectDescription: "Provides Platform migration to sales force", PercentCompliant: "96", Evoluation: "Meets Expectations", ProjectGoLiveDate: new Date()},
    {ProjectId: "CMS-P2", ProjectName: "CMS(Agile)", ProjectDescription: "Health Information Access for patients, Providers", PercentCompliant: "98", Evoluation: "Meets Expectations", ProjectGoLiveDate: new Date()}
  ]


  constructor(   private Router: Router,private Service: ProjectService) 
  {
    this.projectSearch = new ProjectSearch();
    this.GetMethodologies();
  }

  ngOnInit(): void {
    
  }

  GetMethodologies()
  {
    this.lstMethodologies = this.methodologies;
    // this.Service.GetMethodologies().subscribe({
    //   next: (_lstMethodologies) => {
    //     debugger;
    //     this.lstMethodologies = _lstMethodologies;
    //   },
    //   error: () => {
    //   },
    //   complete: () => {},
    // });
  }

  SearchProject()
  {
    this.lstProjects = this.projects;
    this.dsProjects = new MatTableDataSource(this.lstProjects);
    this.dsProjects.paginator = this.paginator;
    this.dsProjects.sort = this.sort;
    // this.Service.GetProjects(this.projectSearch).subscribe({
    //   next: (_lstProjects) => {
    //     this.lstProjects = _lstProjects;
    //     this.dsProjects = new MatTableDataSource(this.lstProjects);
    //     this.dsProjects.paginator = this.paginator;
    //     this.dsProjects.sort = this.sort;
    //   },
    //   error: () => {
    //   },
    //   complete: () => {},
    // });
  }
}

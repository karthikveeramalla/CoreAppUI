import { Component, OnInit, ViewChild } from '@angular/core';
import { Methodology } from '../models/Methodology';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';
import { Project } from '../models/Project';
import { Role } from '../models/Role';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { User } from '../models/User';

@Component({
  selector: 'app-projectmethodology',
  templateUrl: './projectmethodology.component.html',
  styleUrls: ['./projectmethodology.component.css']
})
export class ProjectmethodologyComponent implements OnInit {

  lstMethodologies:  Methodology[] = [];
  objProject!: Project;
  lstRoles: Role[]= [];
  RoleId!: number;
  UserId!: string;

  lstUser: User[] = [];
  dsUsers: MatTableDataSource<User> = new MatTableDataSource<User>(this.lstUser);
  dcUsers: string[] = ['UserId','LastName','FirstName','Role','Location','Action'];
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  methodologies: any = [
    { MethodologyId: 1, MethodologyName: 'Test1' },
    { MethodologyId: 2, MethodologyName: 'Test2' },
    { MethodologyId: 3, MethodologyName: 'Test3' }
  ];

  Roles: any = [
    { RoleId: 1, RoleName: 'Role1' },
    { RoleId: 2, RoleName: 'Role2' },
    { RoleId: 3, RoleName: 'Role3' }
  ];
  
  User:any = {UserId: "No123", LastName: "Veeramalla", FirstName: "Karthik", Role: "Developer", Location: "ABC"}

  constructor(   private Router: Router,private Service: ProjectService) 
  {
    this.objProject = new Project();
    this.GetMethodologies();
    this.GetRoles();
  }
  
  ngOnInit(): void {
    this.lstUser.push(this.User);
  }

  GetMethodologies()
  {
    this.lstMethodologies = this.methodologies;
    // this.Service.GetMethodologies().subscribe({
    //   next: (_lstMethodologies) => {
    //     this.lstMethodologies = _lstMethodologies;
    //   },
    //   error: () => {
    //   },
    //   complete: () => {},
    // });
  }

  GetRoles()
  {
    this.lstRoles = this.Roles;
    // this.Service.GetRoles().subscribe({
    //   next: (_lstRoles) => {
    //     this.lstRoles = _lstRoles;
    //   },
    //   error: () => {
    //   },
    //   complete: () => {},
    // });
  }

  SearchUser()
  {

  }
  AddRole()
  {

  }


}

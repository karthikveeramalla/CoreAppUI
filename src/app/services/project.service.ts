import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Methodology } from '../models/Methodology';
import { Project } from '../models/Project';
import { ProjectSearch } from '../models/ProjectSearch';
import { Role } from '../models/Role';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  baseUrl!: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {
    this.baseUrl = '';
  }

  GetProjects(projectSearch: ProjectSearch): Observable<Project[]> {
    return this.httpClient.post<Project[]>(
      this.baseUrl + 'api/Project/GetProjects',projectSearch,
      this.httpOptions
    );
  }

  GetMethodologies(): Observable<Methodology[]> {
    return this.httpClient.get<Methodology[]>(
      this.baseUrl + 'api/Project/GetMethodologies',
      this.httpOptions
    );
  }

  GetRoles(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(
      this.baseUrl + 'api/Project/GetRoles',
      this.httpOptions
    );
  }
}

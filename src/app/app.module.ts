import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTabLink, MatTabNav } from '@angular/material/tabs';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectmethodologyComponent } from './projectmethodology/projectmethodology.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { AddProjectDetailsDialog, ProjectDetailsComponent } from './project-details/project-details.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProjectmethodologyComponent,
    ProjectDetailsComponent,
    AddProjectDetailsDialog,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableExporterModule
  ],
  providers: [MatTabLink,MatTabNav],
  entryComponents: [AddProjectDetailsDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }

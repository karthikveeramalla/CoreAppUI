import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectmethodologyComponent } from './projectmethodology/projectmethodology.component';


const routes: Routes = [
   { path: 'home', component: HomeComponent }, 
   { path: 'pmethodology', component: ProjectmethodologyComponent }, 
   { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

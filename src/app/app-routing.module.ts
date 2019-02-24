import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'employees' , component: EmployeeListComponent},
  {path: 'employeedetail' , component: EmployeeDetailComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'aboutus' , component: AboutusComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent , EmployeeDetailComponent , HomeComponent , AboutusComponent ]

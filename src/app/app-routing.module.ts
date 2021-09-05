import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListRealtyComponent} from './components/list-realty/list-realty.component';
import {DeleteComponent} from './components/delete/delete.component';
import {EditRealtyComponent} from './components/edit-realty/edit-realty.component';
import {AddRealtyComponent} from './components/add-realty/add-realty.component';
import {SignupComponent} from './components/user/signup/signup.component';
import {SigninComponent} from './components/user/signin/signin.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: 'realties', component: ListRealtyComponent  },
  { path: 'home', component: HomeComponent},
  {path: 'realty/:id', component: DeleteComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'edit-realty/:id', component: EditRealtyComponent},
  {path: 'add-realty', component: AddRealtyComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

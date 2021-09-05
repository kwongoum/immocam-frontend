import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListRealtyComponent } from './components/list-realty/list-realty.component';
import {ResourceService} from './services/resource.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { DeleteComponent } from './components/delete/delete.component';

import { EditRealtyComponent } from './components/edit-realty/edit-realty.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddRealtyComponent } from './components/add-realty/add-realty.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { SignoutComponent } from './components/user/signout/signout.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ListRealtyComponent,
    DeleteComponent,
    EditRealtyComponent,
    AddRealtyComponent,
    SignupComponent,
    SigninComponent,
    SignoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

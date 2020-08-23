import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Views
import { LoginComponent } from '../views/login/login.component';
import { HomeComponent } from '../views/home/home.component';
import { ListComponent } from '../views/list/list.component';

// Components
import { NavbarComponent } from '../components/navbar/navbar.component';

// Pipes
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
  declarations: [
    LoginComponent,
    ListComponent,
    HomeComponent,
    NavbarComponent,
    SearchPipe
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    ListComponent,
    HomeComponent
  ]
})
export class SharedModule { }

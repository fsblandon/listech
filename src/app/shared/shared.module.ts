import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Views
import { LoginComponent } from '../views/login/login.component';
import { HomeComponent } from '../views/home/home.component';
import { ListComponent } from '../views/list/list.component';

// Components
import { NavbarComponent } from '../components/navbar/navbar.component';

// Pipes
import { SearchPipe } from '../pipes/search.pipe';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent,
    HomeComponent,
    NavbarComponent,
    SearchPipe
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    ListComponent,
    HomeComponent
  ]
})
export class SharedModule { }

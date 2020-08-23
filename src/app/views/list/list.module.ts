import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ListRoutingModule } from './list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule
  ]
})
export class ListModule { }

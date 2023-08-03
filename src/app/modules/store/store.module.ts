import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListComponent } from './store-list/store-list.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { StoreRouteModule } from './store-route.module';
import { StoreDetailComponent } from './store-detail/store-detail.component';



@NgModule({
  declarations: [
    StoreListComponent,
    StoreDetailComponent
  ],
  imports: [
    MaterialModule,
    StoreRouteModule,
    CommonModule
  ]
})
export class StoreModule { }

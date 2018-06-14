import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestModuleRoutingModule } from './test-module-routing.module';
import { TestComponentComponent } from './test-component/test-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserCardWrapperComponent } from './components/user-card-wrapper/user-card-wrapper.component';
import { RoomCardWrapperComponent } from './components/room-card-wrapper/room-card-wrapper.component';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import {NgxPaginationModule} from 'ngx-pagination';


import {
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatPaginatorModule,
  MatGridListModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatDividerModule,
  MatIconModule,
  MatExpansionModule


} from '@angular/material';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    TestModuleRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    NgxPaginationModule,
    MatIconModule,
    MatExpansionModule
  ],
  declarations: [TestComponentComponent, MainComponentComponent, SideBarComponent, UserCardWrapperComponent, RoomCardWrapperComponent, RoomCardComponent, UserCardComponent, ContentWrapperComponent],
  bootstrap: [MainComponentComponent]
})
export class TestModuleModule { }

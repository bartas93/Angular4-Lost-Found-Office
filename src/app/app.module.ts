import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdTabsModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishListComponent } from './component/wish-list.component';
import { LostComponent } from './component/lost.component';
import { FoundComponent } from './component/found.component';
import { UsersComponent } from './component/users.component';
import { ItemRepositoryService } from './repository/item-repository.service';
import { ItemService } from './service/item.service';


@NgModule({
  declarations: [
    AppComponent, WishListComponent, LostComponent, FoundComponent, UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdCardModule,
    MdGridListModule,
    MdButtonModule
  ],
  providers: [ItemRepositoryService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

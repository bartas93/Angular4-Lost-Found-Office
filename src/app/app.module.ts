import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdAutocompleteModule, MdDatepickerModule, MdSelectModule, MdInputModule, MdMenuModule, MdSidenavModule, MdDialogModule, MdChipsModule, MdExpansionModule, MdToolbarModule, MdTabsModule, MdCardModule, MdGridListModule, MdButtonModule, MdIconModule, MdNativeDateModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishListComponent } from './component/wish-list.component';
import { LostComponent } from './component/lost.component';
import { FoundComponent } from './component/found.component';
import { UsersComponent } from './component/users.component';
import { InfoDialogComponent } from "./component/dialogs/info-dialog.component";
import { InfoViewComponent } from "./component/dialogs/info-view.component";
import { EditViewComponent } from "./component/dialogs/Edit-view.component";
import { ItemRepositoryService } from './repository/item-repository.service';
import { UserRepositoryService } from './repository/user-repository.service';
import { EnumRepositoryService } from './repository/enum-repository.service';
import { ItemService } from './service/item.service';
import { DateUtilService } from './service/date-util.service';
import { UserService } from './service/user.service';


@NgModule({
  declarations: [
    AppComponent, WishListComponent, LostComponent, FoundComponent, UsersComponent, InfoDialogComponent, EditViewComponent, InfoViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdCardModule,
    MdGridListModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdExpansionModule,
    MdChipsModule,
    MdDialogModule,
    MdSidenavModule,
    MdMenuModule,
    MdInputModule,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdAutocompleteModule
  ],
  providers: [ItemRepositoryService, ItemService, EnumRepositoryService, UserRepositoryService, UserService, DateUtilService],
  bootstrap: [AppComponent],
  entryComponents: [
    InfoDialogComponent
  ]
})
export class AppModule { }

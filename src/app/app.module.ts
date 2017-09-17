import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdTableModule, MdSnackBarModule, MdAutocompleteModule, MdDatepickerModule, MdSelectModule, MdInputModule, MdMenuModule, MdSidenavModule, MdDialogModule, MdChipsModule, MdExpansionModule, MdToolbarModule, MdTabsModule, MdCardModule, MdGridListModule, MdButtonModule, MdIconModule, MdNativeDateModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishListComponent } from './component/item-component/wish-list.component';
import { LostComponent } from './component/item-component/lost.component';
import { FoundComponent } from './component/item-component/found.component';
import { UsersComponent } from './component/user-component/users.component';
import { ItemDialogComponent } from "./component/item-component/dialogs/item-dialog.component";
import { InfoViewComponent } from "./component/item-component/dialogs/dialog-view/info-view.component";
import { EditViewComponent } from "./component/item-component/dialogs/dialog-view/edit-view.component";
import { ItemRepositoryService } from './repository/item-repository.service';
import { UserRepositoryService } from './repository/user-repository.service';
import { EnumRepositoryService } from './repository/enum-repository.service';
import { ItemService } from './service/item.service';
import { DateUtilService } from './service/date-util.service';
import { UserService } from './service/user.service';
import { MessageComponent } from "./component/alerts/message.component";


@NgModule({
  declarations: [
    AppComponent, WishListComponent, LostComponent, FoundComponent, UsersComponent, ItemDialogComponent, EditViewComponent, InfoViewComponent, MessageComponent,
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
    MdAutocompleteModule,
    MdSnackBarModule,
    MdTableModule
  ],
  providers: [ItemRepositoryService, ItemService, EnumRepositoryService, UserRepositoryService, UserService, DateUtilService],
  bootstrap: [AppComponent],
  entryComponents: [
    ItemDialogComponent,
    MessageComponent
  ]
})
export class AppModule { }

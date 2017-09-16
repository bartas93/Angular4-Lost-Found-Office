import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WishListComponent } from './component/item-component/wish-list.component';
import { LostComponent } from './component/item-component/lost.component';
import { FoundComponent } from './component/item-component/found.component';
import { UsersComponent } from './component/user-component/users.component';

const routes: Routes = [
    { path: '', redirectTo: '/wish-list', pathMatch: 'full' },
    { path: 'wish-list', component: WishListComponent },
    { path: 'lost', component: LostComponent },
    { path: 'found', component: FoundComponent },
    { path: 'users', component: UsersComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

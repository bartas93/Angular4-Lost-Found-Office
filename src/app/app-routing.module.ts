import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WishListComponent } from './component/wish-list.component';
import { LostComponent } from './component/lost.component';
import { FoundComponent } from './component/found.component';
import { UsersComponent } from './component/users.component';

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

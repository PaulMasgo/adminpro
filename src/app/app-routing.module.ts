import {NgModule} from '@angular/core';
import {PagesRoutingModule} from './pages/pages.routing';

import {RouterModule, Routes} from '@angular/router';
import {NotpagefoundComponent} from './notpagefound/notpagefound.component';
import {AuthRoutingModule} from './auth/auth.routing';

const routes: Routes = [
  {path: '**', component: NotpagefoundComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

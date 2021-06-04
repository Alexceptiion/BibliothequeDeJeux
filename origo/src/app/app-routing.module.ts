import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './auth/auth/account/account.component';
import { InscriptionComponent } from './auth/auth/inscription/inscription.component';


const routes: Routes = [
  {path: 'account', component: AccountComponent},
  {path: 'inscription', component: InscriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

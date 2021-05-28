import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { CritiquesComponent } from './critiques/critiques.component';
import { ApercuComponent } from './apercu/apercu.component';
import { VideosComponent } from './videos/videos.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, //localhost)
  {path: 'games', component: GamesComponent},//localhost/games)
  {path: 'account', component: AccountComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    GamesComponent,
    AccountComponent,
    ContactComponent,
    CritiquesComponent,
    ApercuComponent,
    VideosComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthModule } from './auth/auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { AccountComponent } from './auth/auth/account/account.component';
import { ContactComponent } from './contact/contact.component';
import { CritiquesComponent } from './critiques/critiques.component';
import { ApercuComponent } from './apercu/apercu.component';
import { VideosComponent } from './videos/videos.component';
import { PhotosComponent } from './photos/photos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { InscriptionComponent } from './auth/auth/inscription/inscription.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GamesDetailComponent } from './games/games-detail/games-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //localhost)
  { path: 'games', component: GamesComponent }, //localhost/games)
  { path: 'account', component: AccountComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'critiques', component: CritiquesComponent },
  { path: 'apercu', component: ApercuComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'inscription', component: InscriptionComponent },
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
    PhotosComponent,
    InscriptionComponent,
    GamesDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    NgbModule,
    MatCarouselModule.forRoot(),
    RouterModule.forRoot(routes),
    CarouselModule,
    NgxPaginationModule,
    FormsModule,
HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

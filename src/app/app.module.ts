import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnasheedComponent } from './anasheed/anasheed.component';
import { AnemyComponent } from './anemy/anemy.component';
import { ApplicationComponent } from './application/application.component';
import { ArfilmsComponent } from './arfilms/arfilms.component';
import { ArmoslslComponent } from './armoslsl/armoslsl.component';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { CoursesComponent } from './courses/courses.component';
import { DevicesComponent } from './devices/devices.component';
import { DocaflamComponent } from './docaflam/docaflam.component';
import { EnfilmsComponent } from './enfilms/enfilms.component';
import { ForignMoslslComponent } from './forign-moslsl/forign-moslsl.component';
import { GamesComponent } from './games/games.component';
import { ImageComponent } from './image/image.component';
import { InfilmsComponent } from './infilms/infilms.component';
import { IslamicComponent } from './islamic/islamic.component';
import { Masr7Component } from './masr7/masr7.component';
import { Mosr3a7oraComponent } from './mosr3a7ora/mosr3a7ora.component';
import { MusicComponent } from './music/music.component';
import { OtherComponent } from './other/other.component';
import { SportComponent } from './sport/sport.component';
import { TvprogComponent } from './tvprog/tvprog.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'anasheed', component: AnasheedComponent},
  {path: 'anemy', component: AnemyComponent},
  {path: 'application', component: ApplicationComponent},
  {path: 'arfilms', component: ArfilmsComponent},
  {path: 'armoslsl', component: ArmoslslComponent},
  {path: 'booksearch', component: BooksearchComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'devices', component: DevicesComponent},
  {path: 'docaflam', component: DocaflamComponent},
  {path: 'enfilms', component: EnfilmsComponent},
  {path: 'forign-moslsl', component: ForignMoslslComponent},
  {path: 'games', component: GamesComponent},
  {path: 'image', component: ImageComponent},
  {path: 'infilms', component: InfilmsComponent},
  {path: 'islamic', component: IslamicComponent},
  {path: 'masr7', component: Masr7Component},
  {path: 'mosr3a7ora', component: Mosr3a7oraComponent},
  {path: 'music', component: MusicComponent},
  {path: 'other', component: OtherComponent},
  {path: 'sport', component: SportComponent},
  {path: 'tvprog', component: TvprogComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnasheedComponent,
    AnemyComponent,
    ApplicationComponent,
    ArfilmsComponent,
    ArmoslslComponent,
    BooksearchComponent,
    CoursesComponent,
    DevicesComponent,
    DocaflamComponent,
    EnfilmsComponent,
    ForignMoslslComponent,
    GamesComponent,
    ImageComponent,
    InfilmsComponent,
    IslamicComponent,
    Masr7Component,
    Mosr3a7oraComponent,
    MusicComponent,
    OtherComponent,
    SportComponent,
    TvprogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes, PreloadAllModules } from '@angular/router'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MusicServiceService } from './music-service.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { SafePipe } from './safe.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const route:Routes = [
  { path:'home' ,component:SearchComponent },
  { path:'about' ,component:AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule,HttpClientModule,HttpModule,
    NgbModule.forRoot()
  ],
  providers: [MusicServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

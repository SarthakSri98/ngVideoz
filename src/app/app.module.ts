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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
//import {MatIconModule} from '@angular/material/icon';
const route:Routes = [
  { path:'' ,redirectTo:'home' , pathMatch:'full' },
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
    NgbModule.forRoot(),
    BrowserAnimationsModule,
     MatButtonModule,
     MatDialogModule,
     MatInputModule,
    // MatIconModule
  ],

  providers: [MusicServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

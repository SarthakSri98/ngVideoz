import { Component,HostBinding } from '@angular/core';
import { slideInOutAnimation } from './slide-in-out-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // make fade in animation available to this component
  //animations: [slideInOutAnimation],
 
  
})
export class AppComponent {
  title = 'app';


//   @HostBinding('@routeAnimation') routeAnimation = true;
// @HostBinding('style.display')   display = 'block';
// @HostBinding('style.position')  position = 'absolute';

  getPage(outlet) {
  return outlet.activatedRouteData['page'] || 'one';
}
}

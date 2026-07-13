import { Component, signal, OnInit } from '@angular/core';
import { 
  Router,
  RouterOutlet, 
  Event,
  RouterLink, 
  RouterLinkActive ,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RoutesRecognized,
  GuardsCheckStart,
  GuardsCheckEnd,
  ResolveStart,
  ResolveEnd
} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Demo Angular Routing');

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event)=>{
      switch(true) {
        case event instanceof NavigationStart:
          console.log(`NavigationStart: ${event.url}`);
          break;
        case event instanceof RoutesRecognized:
          console.log(`RoutesRecognized: ${event.url}`);
          break;
        case event instanceof GuardsCheckStart:
          console.log('GuardsCheckStart');
          break;
        case event instanceof GuardsCheckEnd:
          console.log('GuardsCheckEnd');
          break;
        case event instanceof ResolveStart:
          console.log('ResolveStart');
          break;
        case event instanceof ResolveEnd:
          console.log('ResolveEnd');
          break;
        case event instanceof NavigationEnd:
          console.log(`NavigationEnd: ${event.urlAfterRedirects}`);
          break;
        case event instanceof NavigationCancel:
          console.log('NavigationCancel');
          break;
        case event instanceof NavigationError:
          console.log(`NavigationError: ${event.error}`);
          break;
      }
    });
  }
}

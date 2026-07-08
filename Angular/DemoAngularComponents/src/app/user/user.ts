import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  title = signal('User Component');
  name: string = 'John Doe';
  logoUrl: string = 'assets/GoogleLogo.png';
  counter: number = 0;

  incrementCounter() {
    this.counter++;
  }

  showUser(userName: string) {
    alert(`Hello, ${userName}!`);
  }

  showCoordinates(event: MouseEvent) {
    console.log(`Mouse coordinates: (${event.clientX}, ${event.clientY})`);
  }

  text: string='';
  updateText(event: Event) {
    this.text = (event.target as HTMLInputElement).value;
  }

  userName: string = '';
}

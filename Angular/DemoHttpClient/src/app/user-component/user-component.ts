import { Component, OnInit, signal } from '@angular/core';
import { UserService } from '../services/user-service';
import { CommonModule } from '@angular/common';
import { type User } from '../models/user';

@Component({
  selector: 'app-user-component',
  imports: [CommonModule],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css',
})
export class UserComponent implements OnInit {

  title = signal('Users List');

  // users: any[] = [];
  users: User[] = [];

  newUser= {
    name: 'James',
    email: 'james@sample.com'
  };

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(usersData => {
      this.users = usersData;
    });
  }

  saveUser(){
    this.userService.createUser(this.newUser).subscribe(response=>{
      console.log(`User Saved: ${JSON.stringify(response)}`)
    });
  }
}

import { Component, OnInit }    from '@angular/core';

import { User }                 from './model/users';
import { UserService }          from './service/user.service';

@Component({
  selector: 'my-list',
  template: ` <li *ngFor="let user of users">
                {{user.pseudo}} - {{user.email}}
              </li>
              `,
})

export class ListUsersComponent implements OnInit {
  constructor(private userService: UserService) { }
  users: User[];

  ngOnInit(){
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddUserComponent } from './../add-user/add-user.component';
import { UserService } from './../../services/user.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['avatar', 'name', 'email', 'actions'];

  data: User[];

  constructor(private userSer: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userSer.getAllUsers().subscribe((users) => {
      this.data = users;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: User) => {
      if (result.email && result.name) {
        alert(`name => ${result.name}, email => ${result.email}`);
      } else if (!result.email || !result.name) {
        alert(`fill the fields`);
      }
    });
  }
}

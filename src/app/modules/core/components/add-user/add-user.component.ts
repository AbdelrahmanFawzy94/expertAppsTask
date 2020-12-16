import { User } from './../../models/user';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  model: User;
  name: string;
  email: string;

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.model = new User();
  }

  close(): void {
    this.dialogRef.close(this.model);
  }

  create(): void {
    this.model.name = this.name;
    this.model.email = this.email;
    this.dialogRef.close(this.model);
  }
}

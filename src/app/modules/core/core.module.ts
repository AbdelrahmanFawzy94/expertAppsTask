import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersComponent } from './components/users/users.component';
import { OutletComponent } from './components/#outlet/outlet.component';
import { AppRoutingModule } from './app-routing.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OutletComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    AddUserComponent,
  ],
  entryComponents: [AddUserComponent],
  imports: [FormsModule, CommonModule, AppRoutingModule, SharedModule],
})
export class CoreModule {}

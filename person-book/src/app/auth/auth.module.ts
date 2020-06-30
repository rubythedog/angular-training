import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [AuthService],
  imports: [],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
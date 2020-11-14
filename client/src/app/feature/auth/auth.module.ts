import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthLayoutComponent } from './containers/auth-layout/auth-layout.component';

@NgModule({
  declarations: [AuthLayoutComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, RouterModule, MatGridListModule, AuthRoutingModule],
  exports: [AuthLayoutComponent, LoginComponent, RegisterComponent],
})
export class AuthModule {}

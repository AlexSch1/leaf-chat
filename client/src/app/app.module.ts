import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './feature/auth/auth.module';

const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

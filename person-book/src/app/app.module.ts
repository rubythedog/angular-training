import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Feature Modules
import { AuthModule } from './auth/auth.module';
import { DirectoryComponent } from './directory/directory.component';
import { AddPersonComponent } from './directory/add-person/add-person.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    AddPersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

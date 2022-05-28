import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { PersonComponent } from './layout/layout/person/person.component';
import { SearchPipe } from './layout/search.pipe';
import { SortPipe } from './layout/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PersonComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

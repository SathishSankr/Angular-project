import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';
import { NavComponent } from './components/nav/nav.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PlayComponent } from './components/play/play.component';
import { HighlightDirective } from './others/highlight.directive';
import { NotDirective } from './others/not.directive';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { OthersModule } from './others/others.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignComponent,
    NavComponent,
    DummyComponent,
    ErrorComponent,
    HomeComponent,
    PaginationComponent,
    PlayComponent,
    HighlightDirective,
    NotDirective,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OthersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './core/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {PostService} from './services/post.service';
import { MatInputModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatSelectModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { LogComponent } from './log/log.component';
import { EditLogComponent } from './edit-log/edit-log.component';
import { FeedbackComponent } from './feedback/feedback.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component:  AboutComponent 
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'main',
    component: MainpageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'log',
    component: LogComponent
  },
  {
    path: 'editlog/:id',
    component: EditLogComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    LogComponent,
    EditLogComponent,
    FeedbackComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatMenuModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

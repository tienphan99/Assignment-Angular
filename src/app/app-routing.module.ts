import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './components/home/home.component'
import {ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { AskComponent } from './components/ask/ask.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { TestingComponent } from './components/testing/testing.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { SignInComponent } from './components/sign-in/sign-in.component'
import { SignUpComponent } from './components/sign-up/sign-up.component'
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'home' , component : HomeComponent },
  { path : 'contact' , component : ContactComponent },
  { path : 'about' , component : AboutComponent},
  { path : 'ask' , component : AskComponent},
  { path : 'feedback' , component : FeedbackComponent},
  { path : 'exam/:id' , component : TestingComponent},
  { path : 'exam', component : CatalogueComponent},
  { path : 'login', component : SignInComponent},
  { path : 'register', component : SignUpComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

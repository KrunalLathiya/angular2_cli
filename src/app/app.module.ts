import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { CatListComponent } from './cats/cat-list.component';
import { DogListComponent } from './dogs/dog-list.component';
import { routing } from './app.routes';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SignupService } from './signup/signup.service';
import { LoginService } from './login/login.service';
import { ProfileService } from './profile/profile.service';
import { ProfileComponent } from './profile/profile.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddtocartService } from './add-to-cart/addtocart.service';
import { LogoutComponent } from './logout/logout.component';
import { LogoutService } from './logout/logout.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    DogListComponent,
    CatListComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    AddToCartComponent,
    LogoutComponent,
    NavbarComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [SignupService,LoginService,ProfileService,AddtocartService,LogoutService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

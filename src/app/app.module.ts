import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationMenuComponent } from './top-navigation-menu/top-navigation-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomepageComponent } from './homepage/homepage.component';
import { WeatherApiComponent } from './weather-api/weather-api.component';
import { WeatherDataService } from './services/weather-api/weather-data.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { DashboardComponent } from './user-profile/dashboard/dashboard.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { SignInComponent } from './user-profile/sign-in/sign-in.component';
import { SignOutComponent } from './user-profile/sign-out/sign-out.component';
import { ForgotPasswordComponent } from './user-profile/forgot-password/forgot-password.component';
import { AuthService } from "./services/fire-auth/auth.service";
import { SignUpComponent } from './user-profile/sign-up/sign-up.component';
import { VerifyEmailComponent } from './user-profile/verify-email/verify-email.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { EditProfileComponent } from './user-profile/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationMenuComponent,
    HomepageComponent,
    WeatherApiComponent,
    PageNotFoundComponent,
    DashboardComponent,
    SignInComponent,
    SignOutComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    VerifyEmailComponent,
    DashboardComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatExpansionModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    NgbModule,
    MatFormFieldModule,
    NgIf,
    MatInputModule,
  ],
  providers: [WeatherDataService, DatePipe, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

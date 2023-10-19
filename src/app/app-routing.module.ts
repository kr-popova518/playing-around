import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WeatherApiComponent } from './weather-api/weather-api.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './user-profile/sign-in/sign-in.component';
import { SignUpComponent } from './user-profile/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './user-profile/forgot-password/forgot-password.component';
import { DashboardComponent } from './user-profile/dashboard/dashboard.component';
import { VerifyEmailComponent } from './user-profile/verify-email/verify-email.component';
import { EditProfileComponent } from './user-profile/edit-profile/edit-profile.component';
import { SecureInnerPageGuard } from './shared/guard/secure-inner-page.guard';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'weather-api', component: WeatherApiComponent },
  { path: 'sign-in', component: SignInComponent, canActivate: [AuthGuard] },
  { path: 'register-user', component: SignUpComponent , canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent , canActivate: [SecureInnerPageGuard]},
  { path: 'edit-profile', component: EditProfileComponent , canActivate: [SecureInnerPageGuard]},
  { path: 'verify-email', component: VerifyEmailComponent , canActivate: [SecureInnerPageGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

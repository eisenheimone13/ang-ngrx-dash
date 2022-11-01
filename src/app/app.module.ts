import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { MeetingComponent } from './components/meeting/meeting.component';
import { SocialComponent } from './components/social/social.component';
import { SvgIcon } from './components/svg-icon/svg-icon.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TargetComponent } from './components/target/target.component';
import { TargetContentComponent } from './components/target-content/target-content.component';
import { WelcomeUserComponent } from './components/welcome-user/welcome-user.component';
import { CompletedProfileComponent } from './components/completed-profile/completed-profile.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreModule } from "@ngrx/store";
import { authReducer } from "./store/reducers/auth.reducers";

import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';

import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MeetingComponent,
    SocialComponent,
    SvgIcon,
    SignInComponent,
    SidebarComponent,
    LineChartComponent,
    NavigationComponent,
    TargetComponent,
    TargetContentComponent,
    WelcomeUserComponent,
    CompletedProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ auth: authReducer }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }

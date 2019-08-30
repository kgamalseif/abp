import { CoreModule } from '@abp/ng.core';
import { LAYOUTS } from '@abp/ng.theme.basic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { OAuthModule } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { RootAccountModule } from '@abp/ng.account';
import { RootIdentityModule } from '@abp/ng.identity';
import { RootTenantManagementModule } from '@abp/ng.tenant-management';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ThemeSharedModule.forRoot(),
    CoreModule.forRoot({
      environment,
      requirements: {
        layouts: LAYOUTS,
      },
    }),
    RootAccountModule.forRoot({ redirectUrl: '/' }),
    RootIdentityModule.forRoot(),
    RootTenantManagementModule.forRoot(),

    OAuthModule.forRoot(),
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
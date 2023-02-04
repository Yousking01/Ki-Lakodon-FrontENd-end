import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { NotificationComponent } from './notification/notification.component';
import { TokenInterceptorProvider } from './_helpers/token.interceptor';

@NgModule({
  declarations: [AppComponent,NotificationComponent],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      // NgChartsModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy  }, TokenInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}

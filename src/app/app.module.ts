import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BubbleChartsComponent } from './bubble-charts/bubble-charts.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { LineChartsComponent } from './line-charts/line-charts.component';
import { AreaChartsComponent } from './area-charts/area-charts.component';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { MixedChartsComponent } from './mixed-charts/mixed-charts.component';
import { CandlestickChartsComponent } from './candlestick-charts/candlestick-charts.component';
import { RadarChartsComponent } from './radar-charts/radar-charts.component';
import { RadialBarChartsComponent } from './radial-bar-charts/radial-bar-charts.component';
import { HeatmapChartsComponent } from './heatmap-charts/heatmap-charts.component';
import { SparklinesComponent } from './sparklines/sparklines.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ToastComponent } from './toast/toast.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ToastrModule } from 'ngx-toastr';
import { SelectBoxComponent } from './select-box/select-box.component';
import { NavigationSidebarComponent } from './navigation-sidebar/navigation-sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { GridContentComponent } from './grid-content/grid-content.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridContentViewComponent } from './grid-content-view/grid-content-view.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProgressBarModule } from 'angular-progress-bar';
import { ChatInterfaceComponent } from './chat-interface/chat-interface.component';
import { NgChatModule } from 'ng-chat';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SocialAuthenticationComponent } from './social-authentication/social-authentication.component';
import { SocialLoginModule, GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,
    BarGraphComponent,
    BubbleChartsComponent,
    PieChartComponent,
    DatePickerComponent,
    LineChartsComponent,
    AreaChartsComponent,
    BarChartsComponent,
    MixedChartsComponent,
    CandlestickChartsComponent,
    RadarChartsComponent,
    RadialBarChartsComponent,
    HeatmapChartsComponent,
    SparklinesComponent,
    ToastComponent,
    SearchBoxComponent,
    SelectBoxComponent,
    PaginationComponent,
    NavigationSidebarComponent,
    GridContentComponent,
    GridContentViewComponent,
    PaginationComponent,
    ChatInterfaceComponent,
    SocialAuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    PaginationModule.forRoot(),
    SidebarModule.forRoot(),
    AgGridModule.withComponents([]),
    ProgressBarModule,
    FormsModule,
    HttpClientModule,
    NgChatModule,
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('1086647421044-jbn20cr6e0c921fjfv3q60u0usd8hn1f.apps.googleusercontent.com'),
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('3421361311257393'),
        },
        {
          id: AmazonLoginProvider.PROVIDER_ID,
          provider: new AmazonLoginProvider('amzn1.application-oa2-client.ba587dcbaa0f47768ffd8e57b99bbbaf'),
        },
      ],
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

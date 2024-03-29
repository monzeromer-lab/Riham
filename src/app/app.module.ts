import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SellersComponent } from './sellers/sellers.component';
import { StockComponent } from './stock/stock.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SellsComponent } from './sells/sells.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { IssuesComponent } from './issues/issues.component';
import { AccountsComponent } from './accounts/accounts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarComponent } from './bar/bar.component';
import { NgChartsModule } from 'ng2-charts';
import { YearSellsComponent } from './year-sells/year-sells.component';
import { MonthSellsComponent } from './month-sells/month-sells.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SellersComponent,
    StockComponent,
    NotificationsComponent,
    SellsComponent,
    ProductsComponent,
    OrdersComponent,
    IssuesComponent,
    AccountsComponent,
    BarComponent,
    YearSellsComponent,
    MonthSellsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgChartsModule,
    //@ts-ignore
    NgChartsModule.forRoot({defaults: {responsive: false}})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

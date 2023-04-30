import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellersComponent } from './sellers/sellers.component';
import { StockComponent } from './stock/stock.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SellsComponent } from './sells/sells.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { IssuesComponent } from './issues/issues.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  {path: "", redirectTo: "/dashboard", pathMatch: "full"},
  {path: "dashboard", component: DashboardComponent},
  {path: "sellers", component: SellersComponent},
  {path: "stock", component: StockComponent},
  {path: "notifications", component: NotificationsComponent},
  {path: "sells", component: SellsComponent},
  {path: "products", component: ProductsComponent},
  {path: "orders", component: OrdersComponent},
  {path: "issues", component: IssuesComponent},
  {path: "accounts", component: AccountsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

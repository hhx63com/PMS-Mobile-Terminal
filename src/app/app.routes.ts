import { Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { CartComponent } from './components/cart/cart.component';
import { HistoryComponent } from './components/history/history.component';
import { ItemManagementComponent } from './components/item-management/item-management.component';

export const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'inventory', component: CartComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'management', component: ItemManagementComponent },
];
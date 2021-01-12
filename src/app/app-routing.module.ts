import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
//Components
import { LayoutComponent } from './layout/layout.component';
import { NoFoundComponent } from './no-found/no-found.component'
//Guardian
import { AdminGuard } from './admin.guard'


//Routes
const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'product',
        loadChildren: () => import('./products/product.module').then(m => m.ProductModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.homeModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      },
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', component: NoFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

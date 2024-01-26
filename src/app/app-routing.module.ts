import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./modules/login-module/login-module.module').then(m => m.LoginModuleModule) },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    //canActivate: [AuthGuard],
    children: [
      { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }
      //{ path: 'home', component: HomeComponent, resolve: { data: HomeResolverService} },
     // { path: 'clientes/detalhes/:id', component: ClientDatailComponent },
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './layouts/principal/principal.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/travel/travel.module').then((x) => x.TravelModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

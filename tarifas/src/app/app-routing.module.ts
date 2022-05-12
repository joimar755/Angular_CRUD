import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VhTableComponent } from './components/vh-table/vh-table.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/vh',
    pathMatch: 'full'
  },
  { path: 'vh',
    component: VhTableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

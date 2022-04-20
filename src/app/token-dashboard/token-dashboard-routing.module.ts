import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../_shared/services/guards/auth-guard.service';
import { TokenDashboardComponent } from './token-dashboard.component';

const routes = [
  {
    path: '',
    canActivate: [],
    component: TokenDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TokenDashboardRoutingModule {}

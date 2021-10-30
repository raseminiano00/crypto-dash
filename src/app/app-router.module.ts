import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TokenDashboardModule } from "./token-dashboard/token-dashboard.module";
import { AuthGuardService } from "./_shared/services/guards/auth-guard.service";
const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'app' },
    {
        path: 'dashboard',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./token-dashboard/token-dashboard.module').then(m => TokenDashboardModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
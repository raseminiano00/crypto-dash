import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TokenDashboardModule } from "./token-dashboard/token-dashboard.module";
const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'app' },
    {
        path: 'dashboard',
        loadChildren: () => import('./token-dashboard/token-dashboard.module').then(m => TokenDashboardModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TokenDashboardComponent } from "./token-dashboard.component";

const routes = [
    {
        path: 'dashboard',
        component: TokenDashboardComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class TokenDashboardRoutingModule {

}
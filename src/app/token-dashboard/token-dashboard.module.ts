import { NgModule } from "@angular/core";
import { TokenDashboardRoutingModule } from "./token-dashboard-routing.module";
import { TokenDashboardComponent } from "./token-dashboard.component";

@NgModule({
    declarations: [TokenDashboardComponent],
    imports: [
        TokenDashboardRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class TokenDashboardModule {

}
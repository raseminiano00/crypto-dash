import { NgModule } from "@angular/core";
import { TokenDashboardRoutingModule } from "./token-dashboard-routing.module";
import { TokenDashboardComponent } from "./token-dashboard.component";
import { TokenCardComponent } from './token-card/token-card.component';

@NgModule({
    declarations: [TokenDashboardComponent, TokenCardComponent],
    imports: [
        TokenDashboardRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class TokenDashboardModule {

}
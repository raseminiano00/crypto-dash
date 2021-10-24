import { NgModule } from "@angular/core";
import { TokenDashboardRoutingModule } from "./token-dashboard-routing.module";
import { TokenDashboardComponent } from "./token-dashboard.component";
import { TokenCardComponent } from './token-card/token-card.component';
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [TokenDashboardComponent, TokenCardComponent],
    imports: [
        TokenDashboardRoutingModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: []
})
export class TokenDashboardModule {

}
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "../material.module";
import { DemoContainerComponent } from "./demo-container/demo-container.component";
import { DemoService } from "./demo.service";
import { RoutingBasicsComponent } from "./samples/routing-basics/routing-basics.component";
import { ChildRoutesComponent } from "./samples/child-routes/child-routes.component";
import { SecondaryRoutesComponent } from "./samples/secondary-routes/secondary-routes.component";
import { RouteGuardsComponent } from "./samples/route-guards/route-guards.component";
import { VouchersService } from "../vouchers/voucher.service";
import { PreloadComponent } from "./samples/preload/preload.component";
import { EditorComponent } from "../shared/editor/editor.component";
import { UploaderComponent } from "../shared/uploader/uploader.component";

const demoRoutes: Routes = [
  {
    path: "",
    component: DemoContainerComponent,

    children: [
      { path: "routingbasics", component: RoutingBasicsComponent },
      { path: "childroutes", component: ChildRoutesComponent },
      { path: "secondary", component: SecondaryRoutesComponent },
      { path: "routeguards", component: RouteGuardsComponent },
      { path: "preload", component: PreloadComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    RoutingBasicsComponent,
    ChildRoutesComponent,
    SecondaryRoutesComponent,
    RouteGuardsComponent,
    PreloadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule
  ],
  providers: [DemoService, VouchersService]
})
export class DemosModule {}

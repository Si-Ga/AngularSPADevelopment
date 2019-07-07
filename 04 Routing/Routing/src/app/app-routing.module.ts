import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { VouchersListComponent } from "./vouchers/vouchers-list.component";
import { VoucherComponent } from "./vouchers/voucher/voucher.component";
import { VoucherResolver } from "./vouchers/voucher-resolver.service";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { EditorComponent } from "./shared/editor/editor.component";
import { UploaderComponent } from "./shared/uploader/uploader.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "demos",
    loadChildren: () => import("./demos/demos.module").then(m => m.DemosModule)
  },
  {
    path: "vouchers",
    component: VouchersListComponent
  },
  {
    path: "vouchers/:id",
    component: VoucherComponent,
    resolve: { voucherData: VoucherResolver }
  },
  { path: "showeditor", component: EditorComponent, outlet: "sidebaroutlet" },
  {
    path: "showuploader",
    component: UploaderComponent,
    outlet: "sidebaroutlet"
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

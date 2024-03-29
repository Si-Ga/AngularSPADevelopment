import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { HttpClient } from "@angular/common/http";
import { Voucher } from "../model";
import { environment } from "src/environments/environment";
import { lateVoucher } from "../late-voucher";

@Injectable()
export class StatefulVoucherService {
  constructor(private httpClient: HttpClient) {
    this.initData();
  }

  private vouchersArray: Voucher[] = [];
  private vouchers: BehaviorSubject<Voucher[]> = new BehaviorSubject(
    this.vouchersArray
  );

  private initData() {
    this.httpClient
      .get<Voucher[]>(environment.apiUrl + "api/vouchers")
      .subscribe(data => {
        this.vouchersArray = data;
        this.vouchers.next(this.vouchersArray);
      });
  }

  addLateVoucher() {
    setTimeout(() => {
      this.vouchersArray.push(<Voucher>lateVoucher);
      this.vouchers.next(this.vouchersArray);
    }, 8000);
  }

  getAllVouchers(): Observable<Voucher[]> {
    return this.vouchers;
  }

  getVoucherById(id: number): Observable<Voucher> {
    return this.vouchers.pipe(map(m => m.find(mi => mi.ID == id)));
  }

  insertVoucher(v: Voucher): any {}

  updateVoucher(v: Voucher): any {}

  deleteVoucher(id: number) {}
}

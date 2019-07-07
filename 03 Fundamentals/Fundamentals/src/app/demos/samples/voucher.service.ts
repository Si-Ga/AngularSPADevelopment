import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class VouchersService {
  constructor(private http: HttpClient) {}

  getVouchers(): Observable<any> {
    return this.http.get("/assets/vouchers.json");
  }
}

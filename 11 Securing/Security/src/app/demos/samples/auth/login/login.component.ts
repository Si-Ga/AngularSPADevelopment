import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FBAuthService } from "../FBAuthService";
import { SnackbarService } from "src/app/shared/snackbar/snackbar.service";

import { LoginCredentials } from "../loginCred";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor() {}

  @Output() onLogIn: EventEmitter<LoginCredentials> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}

  login: LoginCredentials = {
    email: "",
    pwd: "",
    remember: false
  };

  logIn() {
    this.onLogIn.emit(this.login);
  }

  cancelAction() {
    this.onCancel.emit(null);
  }
}

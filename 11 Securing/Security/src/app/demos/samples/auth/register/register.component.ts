import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { FBAuthService } from "../FBAuthService";
import { SnackbarService } from "src/app/shared/snackbar/snackbar.service";
import { LoginCredentials } from "../loginCred";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  constructor() {}

  @Output() onRegister: EventEmitter<LoginCredentials> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}

  login: LoginCredentials = {
    email: "",
    pwd: "",
    pwdRepeat: ""
  };

  registerUser() {
    this.onRegister.emit(this.login);
  }

  cancelAction() {
    this.onCancel.emit(null);
  }
}

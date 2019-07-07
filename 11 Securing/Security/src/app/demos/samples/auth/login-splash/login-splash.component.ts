import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { SplashView } from "./splashViewEnum";
import { SnackbarService } from "src/app/shared/snackbar/snackbar.service";
import { FBAuthService } from "../FBAuthService";

@Component({
  selector: "app-login-splash",
  templateUrl: "./login-splash.component.html",
  styleUrls: ["./login-splash.component.scss"]
})
export class LoginSplashComponent implements OnInit {
  constructor(public sns: SnackbarService, public auth: FBAuthService) {}

  title: string = environment.title;
  view: SplashView = SplashView.Default;

  ngOnInit() {}

  setView(option: SplashView) {
    this.view = option;
  }

  logIn(data) {
    this.auth.logOn(data.email, data.pwd, true).then(returned => {
      this.sns.displayAlert("Logon", "you are now logged on");
    });
  }

  registerUser(data) {
    this.auth.createUser(data.email, data.pwd).then((user: firebase.User) => {
      this.sns.displayAlert(user.email, "Acct created - Please Login");
    });
  }

  cancelAction() {
    this.auth.logOff();
  }
}

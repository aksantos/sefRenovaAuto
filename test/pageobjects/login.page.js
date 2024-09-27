import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  get loginDropdown() {
    return $(".login-launcher");
  }

  get inputUsername() {
    // return $("//input[@name='ctl00$ucLoginMenu$txtUsername']");
    return $("input[name$='Username']");
  }

  get inputPassword() {
    return $("//input[@name='ctl00$ucLoginMenu$txtPassword']");
  }

  get btnSubmit() {
    return $("//input[@type='submit']");
  }

  async login(username, password) {
    await this.loginDropdown.click();
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  open() {
    return super.open();
  }
}

export default new LoginPage();

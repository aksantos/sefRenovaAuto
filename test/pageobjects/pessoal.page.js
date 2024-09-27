import { $ } from "@wdio/globals";

class PessoalPage {
  get pessoalText() {
    return $(".breadcrumbs > a > span");
  }

  get renovacaoAutomaticaLink() {
    return $("#renovacaoAutomaticaLink");
  }

  clickRenovacaoAutomaticaLink() {
    this.renovacaoAutomaticaLink.click();
  }

  get inputNumeroTituloResidencia() {
    return $("#txtAuthPanelDocument");
  }

  get inputPassword() {
    return $("#txtAuthPanelPassword");
  }

  get btnSubmit() {
    return $("//input[@type='submit']");
  }

  get authenticateSpan() {
    return $("span[id$='lblAuthTitle");
  }

  async authenticate(numeroTituloResidencia, password) {
    await this.inputNumeroTituloResidencia.setValue(numeroTituloResidencia);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  get errorSpan() {
    return $("span[id$='lblAuthError']");
  }
}

export default new PessoalPage();

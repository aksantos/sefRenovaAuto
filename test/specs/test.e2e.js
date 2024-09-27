import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import PessoalPage from "../pageobjects/pessoal.page.js";

describe("My Login application", async () => {
  const email = process.env.USER;
  const password = process.env.PASS;
  const numeroTituloResidencia = process.env.TR;

  it("should login with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login(email, password);
    await expect(LoginPage.loginDropdown).not.toBeExisting();
    await expect(PessoalPage.pessoalText).toHaveText("Área Pessoal");
  });

  it("should click on renovacao automatica link", async () => {
    await PessoalPage.clickRenovacaoAutomaticaLink();
    await expect(PessoalPage.renovacaoAutomaticaLink).toHaveText("Renovação Automática");
  });

  it("should authenticate with valid Título de Residência", async () => {
    await expect(PessoalPage.authenticateSpan).toHaveText("AUTENTICAÇÃO");
    await PessoalPage.authenticate(numeroTituloResidencia, password);
    await expect(PessoalPage.errorSpan).toHaveText(
      "O título de residência que possui não permite a utilização da funcionalidadE",
      { atStart: true }
    );
  });
});

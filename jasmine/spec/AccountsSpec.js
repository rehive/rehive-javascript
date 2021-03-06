describe("Accounts", function() {
  var rehive;

  beforeEach(function() {
    rehive = new Rehive({apiVersion: 3});

    spyOn(rehive.accounts, "getAccountsList").and.returnValue('success');
    spyOn(rehive.accounts, "getAccount").and.returnValue('success');
    spyOn(rehive.accounts, "getAccountCurrenciesList").and.returnValue('success');
    spyOn(rehive.accounts, "getAccountCurrency").and.returnValue('success');
    spyOn(rehive.accounts, "updateAccountCurrency").and.returnValue('success');
  });

  it("should be able to call list of accounts function successfully", function() {
    var status;

    status = rehive.accounts.getAccountsList();

    expect(rehive.accounts.getAccountsList).toHaveBeenCalledTimes(1);
    expect(status).toEqual('success');
  });


  it("should be able to call get account function successfully", function() {
    var status;

    status = rehive.accounts.getAccount();

    expect(rehive.accounts.getAccount).toHaveBeenCalledTimes(1);
    expect(status).toEqual('success');
  });

  it("should be able to call list of account currencies function successfully", function() {
    var status;

    status = rehive.accounts.getAccountCurrenciesList();

    expect(rehive.accounts.getAccountCurrenciesList).toHaveBeenCalledTimes(1);
    expect(status).toEqual('success');
  });

  it("should be able to call get account currency function successfully", function() {
    var message;

    message = rehive.accounts.getAccountCurrency();

    expect(rehive.accounts.getAccountCurrency).toHaveBeenCalledTimes(1);
    expect(message).toEqual("success");
  });

  it("should be able to call update account currency function successfully", function() {
    var message;

    message = rehive.accounts.updateAccountCurrency();

    expect(rehive.accounts.updateAccountCurrency).toHaveBeenCalledTimes(1);
    expect(message).toEqual("success");
  });
});

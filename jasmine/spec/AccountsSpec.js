describe("Accounts", function() {
  var rehive;

  beforeEach(function() {
    rehive = new Rehive({apiVersion: 3});
    //console.log(rehive);
    spyOn(rehive.accounts, "getAccountsList").and.returnValue('success');
    spyOn(rehive.accounts, "getAccount").and.returnValue('success');
    spyOn(rehive.accounts, "getAccountCurrenciesList").and.returnValue('success');
    spyOn(rehive.accounts, "getAccountCurrency").and.returnValue('success');
    spyOn(rehive.accounts, "updateAccountCurrency").and.returnValue('success');
  });

  it("should be able to get list of accounts successfully", function() {
    var status;

    status = rehive.accounts.getAccountsList();

    expect(rehive.accounts.getAccountsList).toHaveBeenCalledTimes(1);
    expect(status).toEqual('success');
  });


  it("should be able to get account successfully", function() {
    var status;

    status = rehive.accounts.getAccount();

    expect(rehive.accounts.getAccount).toHaveBeenCalledTimes(1);
    expect(status).toEqual('success');
  });

  it("should be able to get list of account currencies successfully", function() {
    var status;

    status = rehive.accounts.getAccountCurrenciesList();

    expect(rehive.accounts.getAccountCurrenciesList).toHaveBeenCalledTimes(1);
    expect(status).toEqual('success');
  });

  it("should be able to get account currency successfully", function() {
    var message;

    message = rehive.accounts.getAccountCurrency();

    expect(rehive.accounts.getAccountCurrency).toHaveBeenCalledTimes(1);
    expect(message).toEqual("success");
  });

  it("should be able to update account currency successfully", function() {
    var message;

    message = rehive.accounts.updateAccountCurrency();

    expect(rehive.accounts.updateAccountCurrency).toHaveBeenCalledTimes(1);
    expect(message).toEqual("success");
  });
});

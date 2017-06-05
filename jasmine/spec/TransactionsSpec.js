describe("Transactions", function() {
  var rehive;

  beforeEach(function() {
    rehive = new Rehive({apiVersion: 3});

    spyOn(rehive.transactions, "getListTransactions").and.returnValue('success');
    spyOn(rehive.transactions, "getTotalTransactionsList").and.returnValue('success');
    spyOn(rehive.transactions, "getTransaction").and.returnValue('success');
    spyOn(rehive.transactions, "createWithdrawal").and.returnValue('success');
    spyOn(rehive.transactions, "createDeposit").and.returnValue('success');
  });

  it("should be able to get list of transactions successfully", function() {
    var status;

    status = rehive.transactions.getListTransactions();

    expect(rehive.transactions.getListTransactions).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to get list of total transactions successfully", function() {
    var status;

    status = rehive.transactions.getTotalTransactionsList();

    expect(rehive.transactions.getTotalTransactionsList).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to get a transaction successfully", function() {
    var status;

    status = rehive.transactions.getTransaction();

    expect(rehive.transactions.getTransaction).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to create a withdrawal successfully", function() {
    var status;

    status = rehive.transactions.createWithdrawal();

    expect(rehive.transactions.createWithdrawal).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to create a deposit successfully", function() {
    var status;

    status = rehive.transactions.createDeposit();

    expect(rehive.transactions.createDeposit).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });
});

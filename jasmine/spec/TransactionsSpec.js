describe("Transactions", function() {
  var rehive;

  beforeEach(function() {
    rehive = new Rehive({apiVersion: 3});

    spyOn(rehive.transactions, "getTransactionsList").and.returnValue('success');
    spyOn(rehive.transactions, "getTotalTransactionsList").and.returnValue('success');
    spyOn(rehive.transactions, "getTransaction").and.returnValue('success');
    spyOn(rehive.transactions, "createWithdrawal").and.returnValue('success');
    spyOn(rehive.transactions, "createDeposit").and.returnValue('success');
  });

  it("should be able to call get list of transactions function successfully", function() {
    var status;

    status = rehive.transactions.getTransactionsList();

    expect(rehive.transactions.getTransactionsList).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call get list of total transactions function successfully", function() {
    var status;

    status = rehive.transactions.getTotalTransactionsList();

    expect(rehive.transactions.getTotalTransactionsList).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call get a transaction function successfully", function() {
    var status;

    status = rehive.transactions.getTransaction();

    expect(rehive.transactions.getTransaction).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call create a withdrawal function successfully", function() {
    var status;

    status = rehive.transactions.createWithdrawal();

    expect(rehive.transactions.createWithdrawal).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call create a deposit function successfully", function() {
    var status;

    status = rehive.transactions.createDeposit();

    expect(rehive.transactions.createDeposit).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });
});

describe("Company", function() {
  var rehive;

  beforeEach(function() {
    rehive = new Rehive({apiVersion: 3});

    spyOn(rehive.company, "getCompanyDetails").and.returnValue('success');
    spyOn(rehive.company, "getCompanyCurrencies").and.returnValue('success');
    spyOn(rehive.company, "getCompanyCurrency").and.returnValue('success');
    spyOn(rehive.company, "getCompanyBanks").and.returnValue('success');
  });

  it("should be able to call get company details function successfully", function() {
    var status;

    status = rehive.company.getCompanyDetails();

    expect(rehive.company.getCompanyDetails).toHaveBeenCalledTimes(1);
    expect(status).toEqual('success');
  });


  it("should be able to call get list of company currencies function successfully", function() {
    var status;

    status = rehive.company.getCompanyCurrencies();

    expect(rehive.company.getCompanyCurrencies).toHaveBeenCalledTimes(1);
    expect(status).toEqual('success');
  });

  it("should be able to call get company currency function successfully", function() {
    var status;

    status = rehive.company.getCompanyCurrency();

    expect(rehive.company.getCompanyCurrency).toHaveBeenCalledTimes(1);
    expect(status).toEqual('success');
  });

  it("should be able to call get list of account banks function successfully", function() {
    var status;

    status = rehive.company.getCompanyBanks();

    expect(rehive.company.getCompanyBanks).toHaveBeenCalledTimes(1);
    expect(status).toEqual('success');
  });
});

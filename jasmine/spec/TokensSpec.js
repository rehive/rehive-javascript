describe("Tokens", function() {
  var rehive;

  beforeEach(function() {
    rehive = new Rehive({apiVersion: 3});

    spyOn(rehive.token, "getTokensList").and.returnValue('success');
    spyOn(rehive.token, "getToken").and.returnValue('success');
    spyOn(rehive.token, "createToken").and.returnValue('success');
    spyOn(rehive.token, "deleteToken").and.returnValue('success');
  });

  it("should be able to call get list of tokens function successfully", function() {
    var status;

    status = rehive.token.getTokensList();

    expect(rehive.token.getTokensList).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
    });

  it("should be able to call get token function successfully", function() {
    var status;

    status = rehive.token.getToken();

    expect(rehive.token.getToken).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call create token function successfully", function() {
    var status;

    status = rehive.token.createToken();

    expect(rehive.token.createToken).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call delete token function successfully", function() {
    var status;

    status = rehive.token.deleteToken();

    expect(rehive.token.deleteToken).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });
});

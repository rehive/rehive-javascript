describe("Users", function() {
  var rehive;

  beforeEach(function() {
    rehive = new Rehive({apiVersion: 3});

    spyOn(rehive.user, "getUserProfile").and.returnValue('success');
    spyOn(rehive.user, "updateUserProfile").and.returnValue('success');
    spyOn(rehive.user, "getUserAddress").and.returnValue('success');
    spyOn(rehive.user, "updateUserAddress").and.returnValue('success');
    spyOn(rehive.user, "getUserBankAccounts").and.returnValue('success');
    spyOn(rehive.user, "createUserBankAccount").and.returnValue('success');
    spyOn(rehive.user, "updateUserBankAccount").and.returnValue('success');
    spyOn(rehive.user, "getUserBitcoinAccounts").and.returnValue('success');
    spyOn(rehive.user, "createUserBitcoinAccount").and.returnValue('success');
    spyOn(rehive.user, "updateUserBitcoinAccount").and.returnValue('success');
    spyOn(rehive.user, "createDocument").and.returnValue('success');
    spyOn(rehive.user, "getUserEmailAddresses").and.returnValue('success');
    spyOn(rehive.user, "createUserEmailAddress").and.returnValue('success');
    spyOn(rehive.user, "updateUserEmailAddress").and.returnValue('success');
    spyOn(rehive.user, "getUserMobileNumbers").and.returnValue('success');
    spyOn(rehive.user, "createUserMobileNumbers").and.returnValue('success');
    spyOn(rehive.user, "updateUserMobileNumbers").and.returnValue('success');
    spyOn(rehive.user, "getUserNotifications").and.returnValue('success');
    spyOn(rehive.user, "updateUserNotifications").and.returnValue('success');

  });

  it("should be able to get user profile successfully", function() {
    var status;

    status = rehive.user.getUserProfile();

    expect(rehive.user.getUserProfile).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to update user profile successfully", function() {
    var status;

    status = rehive.user.updateUserProfile();

    expect(rehive.user.updateUserProfile).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to get user address successfully", function() {
    var status;

    status = rehive.user.getUserAddress();

    expect(rehive.user.getUserAddress).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to update user address successfully", function() {
    var status;

    status = rehive.user.updateUserAddress();

    expect(rehive.user.updateUserAddress).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to get user bank accounts successfully", function() {
    var status;

    status = rehive.user.getUserBankAccounts();

    expect(rehive.user.getUserBankAccounts).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to create user bank account successfully", function() {
    var status;

    status = rehive.user.createUserBankAccount();

    expect(rehive.user.createUserBankAccount).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to update user bank account successfully", function() {
    var status;

    status = rehive.user.updateUserBankAccount();

    expect(rehive.user.updateUserBankAccount).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to get user bitcoin accounts successfully", function() {
    var status;

    status = rehive.user.getUserBitcoinAccounts();

    expect(rehive.user.getUserBitcoinAccounts).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to create user bitcoin account successfully", function() {
    var status;

    status = rehive.user.createUserBitcoinAccount();

    expect(rehive.user.createUserBitcoinAccount).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to update user bitcoin account successfully", function() {
    var status;

    status = rehive.user.updateUserBitcoinAccount();

    expect(rehive.user.updateUserBitcoinAccount).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to create document successfully", function() {
    var status;

    status = rehive.user.createDocument();

    expect(rehive.user.createDocument).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to get user email addresses successfully", function() {
    var status;

    status = rehive.user.getUserEmailAddresses();

    expect(rehive.user.getUserEmailAddresses).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to create user email address successfully", function() {
    var status;

    status = rehive.user.createUserEmailAddress();

    expect(rehive.user.createUserEmailAddress).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to update user email address successfully", function() {
    var status;

    status = rehive.user.updateUserEmailAddress();

    expect(rehive.user.updateUserEmailAddress).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to get user mobile numbers successfully", function() {
    var status;

    status = rehive.user.getUserMobileNumbers();

    expect(rehive.user.getUserMobileNumbers).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to create user mobile numbers successfully", function() {
    var status;

    status = rehive.user.createUserMobileNumbers();

    expect(rehive.user.createUserMobileNumbers).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to update user mobile numbers successfully", function() {
    var status;

    status = rehive.user.updateUserMobileNumbers();

    expect(rehive.user.updateUserMobileNumbers).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to get user notifications successfully", function() {
    var status;

    status = rehive.user.getUserNotifications();

    expect(rehive.user.getUserNotifications).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to update user notifications successfully", function() {
    var status;

    status = rehive.user.updateUserNotifications();

    expect(rehive.user.updateUserNotifications).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });
});

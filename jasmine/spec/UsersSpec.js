describe("Users", function() {
  var rehive;

  beforeEach(function() {
    rehive = new Rehive({apiVersion: 3});

    spyOn(rehive.user, "getUserProfile").and.returnValue('success');
    spyOn(rehive.user, "updateUserProfile").and.returnValue('success');
    spyOn(rehive.user, "getUserAddress").and.returnValue('success');
    spyOn(rehive.user, "updateUserAddress").and.returnValue('success');
    spyOn(rehive.user, "getUserBankAccounts").and.returnValue('success');
    spyOn(rehive.user, "getUserBankAccount").and.returnValue('success');
    spyOn(rehive.user, "createUserBankAccount").and.returnValue('success');
    spyOn(rehive.user, "updateUserBankAccount").and.returnValue('success');
    spyOn(rehive.user, "getUserBitcoinAccounts").and.returnValue('success');
    spyOn(rehive.user, "getUserBitcoinAccount").and.returnValue('success');
    spyOn(rehive.user, "createUserBitcoinAccount").and.returnValue('success');
    spyOn(rehive.user, "updateUserBitcoinAccount").and.returnValue('success');
    spyOn(rehive.user, "createDocument").and.returnValue('success');
    spyOn(rehive.user, "getUserEmailAddresses").and.returnValue('success');
    spyOn(rehive.user, "createUserEmailAddress").and.returnValue('success');
    spyOn(rehive.user, "updateUserEmailAddress").and.returnValue('success');
    spyOn(rehive.user, "getUserMobileNumbers").and.returnValue('success');
    spyOn(rehive.user, "createUserMobileNumber").and.returnValue('success');
    spyOn(rehive.user, "updateUserMobileNumber").and.returnValue('success');
    spyOn(rehive.user, "getUserNotifications").and.returnValue('success');
    spyOn(rehive.user, "updateUserNotifications").and.returnValue('success');

  });

  it("should be able to call get user profile function successfully", function() {
    var status;

    status = rehive.user.getUserProfile();

    expect(rehive.user.getUserProfile).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call update user profile function successfully", function() {
    var status;

    status = rehive.user.updateUserProfile();

    expect(rehive.user.updateUserProfile).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call get user address function successfully", function() {
    var status;

    status = rehive.user.getUserAddress();

    expect(rehive.user.getUserAddress).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call update user address function successfully", function() {
    var status;

    status = rehive.user.updateUserAddress();

    expect(rehive.user.updateUserAddress).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call get user bank accounts function successfully", function() {
    var status;

    status = rehive.user.getUserBankAccounts();

    expect(rehive.user.getUserBankAccounts).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call get bank account function successfully", function() {
    var status;

    status = rehive.user.getUserBankAccount();

    expect(rehive.user.getUserBankAccount).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call create user bank account function successfully", function() {
    var status;

    status = rehive.user.createUserBankAccount();

    expect(rehive.user.createUserBankAccount).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call update user bank account function successfully", function() {
    var status;

    status = rehive.user.updateUserBankAccount();

    expect(rehive.user.updateUserBankAccount).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call get user bitcoin accounts function successfully", function() {
    var status;

    status = rehive.user.getUserBitcoinAccounts();

    expect(rehive.user.getUserBitcoinAccounts).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call get bitcoin account function successfully", function() {
    var status;

    status = rehive.user.getUserBitcoinAccount();

    expect(rehive.user.getUserBitcoinAccount).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call create user bitcoin account function successfully", function() {
    var status;

    status = rehive.user.createUserBitcoinAccount();

    expect(rehive.user.createUserBitcoinAccount).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call update user bitcoin account function successfully", function() {
    var status;

    status = rehive.user.updateUserBitcoinAccount();

    expect(rehive.user.updateUserBitcoinAccount).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call create document function successfully", function() {
    var status;

    status = rehive.user.createDocument();

    expect(rehive.user.createDocument).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call get user email addresses function successfully", function() {
    var status;

    status = rehive.user.getUserEmailAddresses();

    expect(rehive.user.getUserEmailAddresses).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call create user email address function successfully", function() {
    var status;

    status = rehive.user.createUserEmailAddress();

    expect(rehive.user.createUserEmailAddress).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call update user email address function successfully", function() {
    var status;

    status = rehive.user.updateUserEmailAddress();

    expect(rehive.user.updateUserEmailAddress).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call get user mobile numbers function successfully", function() {
    var status;

    status = rehive.user.getUserMobileNumbers();

    expect(rehive.user.getUserMobileNumbers).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call create user mobile numbers function successfully", function() {
    var status;

    status = rehive.user.createUserMobileNumber();

    expect(rehive.user.createUserMobileNumber).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call update user mobile numbers function successfully", function() {
    var status;

    status = rehive.user.updateUserMobileNumber();

    expect(rehive.user.updateUserMobileNumber).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call get user notifications function successfully", function() {
    var status;

    status = rehive.user.getUserNotifications();

    expect(rehive.user.getUserNotifications).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to call update user notifications function successfully", function() {
    var status;

    status = rehive.user.updateUserNotifications();

    expect(rehive.user.updateUserNotifications).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });
});

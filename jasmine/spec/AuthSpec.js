describe("Auth", function() {
  var rehive;

  beforeEach(function() {
    rehive = new Rehive({apiVersion: 3});
    console.log(rehive);
  });

  it("should be able to login successfully", function(done) {
    rehive.auth.login(
      {
        identifier: 'test1@rehive.com',
        company_id: 'test_company_1',
        password: 'test1'
      }, function(err,user){
        expect(user.first_name).toEqual('Test');
        done();
      })
  });

  it("should be able to login successfully", function(done) {
    rehive.auth.login(
      {
        identifier: 'test1@rehive.com',
        company_id: 'test_company_1',
        password: 'test1'
      }, function(err,user){
        expect(user.first_name).toEqual('Test');
        done();
      })
  });




});

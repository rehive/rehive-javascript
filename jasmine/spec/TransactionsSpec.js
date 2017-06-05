describe("Transactions", function() {
  var rehive;

  beforeEach(function(done) {
    rehive = new Rehive({apiVersion: 3});
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

  it("should be able to get list of transactions successfully", function(done) {
    rehive.transactions.getListTransactions('',function(err,res){
      expect(res.next).toEqual("https://rehive.com/api/3/transactions/?page=2");
      done();
    })
  });


});

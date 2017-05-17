
function convertToText(data) {
    if(!data) return '';

    var dataString = JSON.stringify(data, null, 1);
    dataString = dataString.replace(/[{",\\}]/g, '').trim();
    return dataString;
}

function register(first_name,last_name,email,company_id,password1,password2){
    Rehive.auth.register(
        {
            first_name: first_name,
            last_name: last_name,
            email: email,
            company_id: company_id,
            password1: password1,
            password2: password2
        }, function(err,user){
            if(err){
                console.log(err);
                return
            }
            console.log(user);
            document.getElementById('result').innerHTML = convertToText(user);
        })
}

function registerCompany(first_name,last_name,email,company_id,password1,password2){
    Rehive.auth.registerCompany(
        {
            first_name: first_name,
            last_name: last_name,
            email: email,
            company_id: company_id,
            password1: password1,
            password2: password2
        }, function(err,user){
            if(err){
                console.log(err);
                return
            }
            console.log(user);
            document.getElementById('result').innerHTML = convertToText(user);
        })
}

function login(identifier,company_id,password){
    Rehive.auth.login(
        {
            identifier: identifier,
            company_id: company_id,
            password: password
        }, function(err,user){
            if(err){
                console.log(err);
                return
            }
            console.log(user);
            document.getElementById('result').innerHTML = convertToText(user);
    })
}

function logout(){
    Rehive.auth.logout(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res.message);
        document.getElementById('result').innerHTML = res.message;
    })
}

function logoutAll(){
    Rehive.auth.logoutAll(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res.message);
        document.getElementById('result').innerHTML = res.message;
    })
}

function changePassword(old_password,new_password1,new_password2){
    Rehive.auth.changePassword(
        {
            old_password: old_password,
            new_password1: new_password1,
            new_password2: new_password2
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.message);
        })
}

function resetPassword(identifier,company_id){
    Rehive.auth.resetPassword(
        {
            identifier: identifier,
            company_id: company_id
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.message);
        })
}

function resetConfirmPassword(new_password1,new_password2,uid,token){
    Rehive.auth.resetConfirmPassword(
        {
            new_password1: new_password1,
            new_password2: new_password2,
            uid: uid,
            token: token
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.message);
        })
}

function getTransactionsList(){
    Rehive.transactions.getListTransactions(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getUserProfile(){
    Rehive.user.retrieveProfile(function(err,user){
        if(err){
            console.log(err);
            return
        }
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    })
}


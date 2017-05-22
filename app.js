
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

function resendEmailVerification(identifier,company_id){
    Rehive.auth.resendEmailVerification(
        {
            identifier: identifier,
            company_id: company_id
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.status);
        })
}

function resendMobileVerification(identifier,company_id){
    Rehive.auth.resendMobileVerification(
        {
            identifier: identifier,
            company_id: company_id
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.status);
        })
}

function getListTokens(){
    Rehive.token.getListTokens(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function createToken(password){
    Rehive.token.createToken(
        {
            password: password
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.user);
        })
}

function deleteToken(tokenKey){
    Rehive.token.deleteToken(tokenKey,function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
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
    Rehive.user.getUserProfile(function(err,user){
        if(err){
            console.log(err);
            return
        }
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    })
}

function updateUserProfile(data){
    Rehive.user.updateUserProfile(data, function(err,user){
        if(err){
            console.log(err);
            return
        }
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    })
}

function getUserAddress(){
    Rehive.user.getUserAddress(function(err,user){
        if(err){
            console.log(err);
            return
        }
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    })
}


function updateUserAddress(data){
    Rehive.user.updateUserAddress(data, function(err,user){
        if(err){
            console.log(err);
            return
        }
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    })
}

function getUserBankAccounts(){
    Rehive.user.getUserBankAccounts(function(err,user){
        if(err){
            console.log(err);
            return
        }
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    })
}

function createUserBankAccount(name,number,type,bank_name,bank_code,branch_code,swift,iban,bic){
    Rehive.user.createUserBankAccount(
        {
            name: name,
            number: number,
            type: type,
            bank_name: bank_name,
            bank_code: bank_code,
            branch_code: branch_code,
            swift: swift,
            iban: iban,
            bic: bic
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        })
}

function updateUserBankAccount(accountId, data){
    Rehive.user.updateUserBankAccount(accountId,data, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        })
}

function deleteUserBankAccount(bankAccountId){
    Rehive.user.deleteUserBankAccount(bankAccountId,function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    })
}

function getUserBitcoinAccounts(){
    Rehive.user.getUserBitcoinAccounts(function(err,user){
        if(err){
            console.log(err);
            return
        }
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    })
}

function createUserBitcoinAccount(address){
    Rehive.user.createUserBitcoinAccount(
        {
            address: address
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        })
}

function updateUserBitcoinAccount(accountId, data){
    Rehive.user.updateUserBitcoinAccount(accountId,data, function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}
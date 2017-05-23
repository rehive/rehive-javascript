
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

function verifyMobile(otp){
    Rehive.auth.verifyMobile(
        {
            otp: otp
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
    Rehive.user.getUserAddress(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}


function updateUserAddress(data){
    Rehive.user.updateUserAddress(data, function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getUserBankAccounts(){
    Rehive.user.getUserBankAccounts(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
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
    Rehive.user.getUserBitcoinAccounts(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
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

function createDocument(document_category,document_type){
    var fileSelected = document.getElementById("fileInput").files[0],
        formData =  new FormData;

    if(document_category == undefined || document_category == null){
        document_category = '';
    }

    if(document_type == undefined || document_type == null){
        document_type = '';
    }

    formData.append('file', fileSelected);
    formData.append('document_category', document_category);
    formData.append('document_type', document_type);

    Rehive.user.createDocument(formData, function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getUserEmailAddresses(){
    Rehive.user.getUserEmailAddresses(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function createUserEmailAddresses(email,primary){
    Rehive.user.createUserEmailAddresses(
        {
            email: email,
            primary: primary
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        })
}

function updateUserEmailAddresses(emailId, data){
    Rehive.user.updateUserEmailAddresses(emailId,data, function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getUserMobileNumbers(){
    Rehive.user.getUserMobileNumbers(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function createUserMobileNumbers(number,primary){
    Rehive.user.createUserMobileNumbers(
        {
            number: number,
            primary: primary
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        })
}

function updateUserMobileNumbers(mobileNumberId, data){
    Rehive.user.updateUserMobileNumbers(mobileNumberId,data, function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getUserNotifications(){
    Rehive.user.getUserNotifications(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function updateUserNotifications(notificationsId, data){
    Rehive.user.updateUserNotifications(notificationsId,data, function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getTransactionsList(filters){
    Rehive.transactions.getListTransactions(filters,function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}


function getTotalTransactionsList(filters){
    Rehive.transactions.getTotalTransactionsList(filters,function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getTransaction(tx_code){
    Rehive.transactions.getTransaction(tx_code,function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

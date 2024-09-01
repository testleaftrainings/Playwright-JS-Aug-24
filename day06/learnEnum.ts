enum responseStatus{  //default value will be zero -->following members willb incremented to 1
    Pass=1,
    Fail,
    Pending

}

console.log(responseStatus.Pass)
console.log(responseStatus.Fail)

enum browserType{
    browser4,
    browser1="Chrome",
    browser2="firefox",
    browser3="Edge",
    
}

console.log(browserType.browser1)

enum urlConstants{
    adminUrl="https://www.google.com/admin",
    QAUrl="https://www.google.com/QA",

}


enum credentials{
    adminCredtial="adminData"
}

//nestd object
let userCre={
    admin:{
        username:"",
        password:""
    },
    userData:{
        username:"",
        password:""
    },

}
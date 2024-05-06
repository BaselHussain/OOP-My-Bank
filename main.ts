import { log } from "console";
import inquirer from "inquirer";
class Customer{
    firstName:string;
    lastName:string;
    age:number;
    mobileNumber:number;
    bankAccountNumber:number;
    constructor(firstName:string,
        lastName:string,
        age:number,
        mobileNumber:number,
        bankAccountNumber:number){
            this.firstName=firstName;
            this.lastName=lastName;
            this.age=age;
            this.mobileNumber=mobileNumber;
            this.bankAccountNumber=bankAccountNumber
        }
}
class Bank{
    accountBalance:number=0;
    deposit(amount:number):void{
        this.accountBalance+=amount
        console.log(`${amount} has been deposited in your account`)
        if(amount<0){
            console.log(`Please enter valid amount to be deposited`)
        }
    }
    withdraw(amount:number){
        if(amount>this.accountBalance){
            console.log(`You have insufficient balance`); 
            
        }else if(amount<0){
            console.log(`Please enter valid amount to be withdrawn`)
        }
        else{
            this.accountBalance-=amount;
            console.log(`${amount} has been withdrawn from your account`)
        }
    }
    getBalance(){
        console.log(`Your balance is ${this.accountBalance}`)
    }
    exit(){
        process.exit()
    }
}
var customerInfo=await inquirer.prompt([{
    name:"firstName",
    type:"string",
    message:"Please enter your first name"
},{
    name:"lastName",
    type:"string",
    message:"Please enter your last name"
},{
    name:"age",
    type:"string",
    message:"Please enter your age"
},{
    name:"mobileNumber",
    type:"string",
    message:"Please enter your mobile Number"
},{
    name:"accountNumber",
    type:"string",
    message:"Please enter your account Number"
}])
const {firstName,lastName,age,mobileNumber,accountNumber}=customerInfo;
const newCustomer=new Customer(firstName,lastName,age,mobileNumber,accountNumber);
console.log(`Your account has successfully been created`)
console.table(newCustomer)
var condition=true;
var bank=new Bank()
while(condition){
var question=await inquirer.prompt([{
    name:"action",
    type:"list",
    message:"What do you wanna do?",
    choices:["Deposit Money","Withdraw Money","Get Balance","Exit"]
}])
if(question.action==="Deposit Money"){
    var ask=await inquirer.prompt([{
        name:"amount",
        type:"number",
        message:"Please enter the amount you want to deposit in your account"
    }])
    bank.deposit(ask.amount)
}else if(question.action==="Withdraw Money"){
       var ask1=await inquirer.prompt([{
       name:"amount",
        type:"number",
        message:"Please enter the amount you want to deposit in your account"
}])
bank.withdraw(ask1.amount)
}

else if(question.action==="Get Balance"){
bank.getBalance()
}else{
    bank.exit()
}
}
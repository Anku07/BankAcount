class Bank{
    constructor(){
        this.BankNames = "",
        this.bankbranches = ""
    }
    AddingOfBranches(branch){
        this.bankbranches = this.bankbranches.push(branch)
        console.log(this.bankbranches)
    }
    removalOfBranches(branch){
        
        console.log(this.bankbranches)
    }
    displayAllBranches(){
       return{
          
       }
    }
}
export {Bank}
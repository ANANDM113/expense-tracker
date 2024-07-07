
export default function ExpenseInfo({expenses}){

    let profitAmount  =   0;
    let lossAmount    =   0;
    
    const grandTotal    =   expenses.reduce((acc,currentExpense)=>{
        const currentExpenseAmount =   parseInt(currentExpense.amount);

        if(currentExpenseAmount < 0){
            lossAmount  +=  currentExpenseAmount;
        }else{
            profitAmount    +=  currentExpenseAmount;
        }
        return currentExpenseAmount +   acc;
    },0); 

    return(
        <div>
            <div>
                <h4>Your Balance</h4>
                <h1>${grandTotal.toFixed(2)}</h1>
            </div>
            <div>
                <div>
                    <h3>INCOME</h3>
                    <p>+${profitAmount}</p>
                </div>
                <div>
                    <h3>EXPENSE</h3>
                    <p>-${lossAmount}</p>
                </div>
            </div>
        </div>
    );
}
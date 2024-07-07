import styles from "./ExpenseInfo.module.css";

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
        <div className={styles.expenseInfoContainer}>
            <div className={styles.balance}>
                <h3>YOUR BALANCE</h3>
                <h1>${grandTotal.toFixed(2)}</h1>
            </div>
            <div className={styles.incomeExpenseContainer}>
                <div>
                    <h4>INCOME</h4>
                    <p className={`${styles.money} ${styles.plus}`}>
                        +${profitAmount}
                    </p>
                </div>
                <div>
                    <h4>EXPENSE</h4>
                    <p className={`${styles.money} ${styles.minus}`}>
                        -${lossAmount}
                    </p>
                </div>
            </div>
        </div>
    );
}
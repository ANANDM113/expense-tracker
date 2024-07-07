import Transaction from "../Transaction/Transaction";
import styles from "./ExpenseList.module.css";

export default function ExpenseList({expenses,deleteExpense,changeExpenseToUpdate}){
    return(
        <div className={styles.expenseListContainer}>
            <h3>Transactions</h3>
            <ul className={styles.transactionList}>
                {
                    expenses.map((expense,i)=>{
                        return(
                            <Transaction 
                                key = {expense.id}
                                index = {i}
                                expense =   {expense}
                                deleteExpense   =   {deleteExpense}
                                changeExpenseToUpdate   =   {changeExpenseToUpdate}
                            />
                        )
                    })
                }
            </ul>
        </div>
    );
};
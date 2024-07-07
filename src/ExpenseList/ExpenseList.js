import Transaction from "../Transaction/Transaction";

export default function ExpenseList({expenses,deleteExpense,changeExpenseToUpdate}){
    return(
        <div>
            <h3>Transactions</h3>
            <ul>
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
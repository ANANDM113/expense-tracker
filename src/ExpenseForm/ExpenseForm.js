import { useRef } from "react";

const ExpenseForm   =   ({
    addExpense,
    updateExpense,
    expenseToUpdate,
    resetExpenseToUpdate
    })  =>  {
        const expenseTextInput  =   useRef();
        const expenseAmountInput    =   useRef();
        
        const handleSubmit  =   (e) =>  {
            e.preventDefault();
            const expenseText   =   expenseTextInput.current.value;
            const expenseAmount =   expenseAmountInput.current.value;

            if(parseInt(expenseAmount)===0){
                return;
            }

            if(!expenseToUpdate){
                const expense={
                    text: expenseText,
                    amount: expenseAmount,
                    id: new Date().getTime()
                }
                addExpense(expense)
                clearInput();
                return;
            }
            const expense = {
                text: expenseText,
                amount: expenseAmount,
                id: expenseToUpdate.id
            }
            const result    =   updateExpense(expense);
            if(!result){
                return
            }
            clearInput();
            resetExpenseToUpdate();
        }
        
        const clearInput    =   ()  =>  {
            expenseTextInput.current.value = "";
            expenseAmountInput.current.value = "";
        }

        return(
            <form onSubmit={handleSubmit}>
                <h4>Add new transaction</h4>
                
                <label htmlFor="inputText">Text</label>
                <input type="text" 
                    placeholder="Enter Text..."
                    ref={expenseTextInput}
                    id="inputText"
                    required
                />
                <div>
                    <label htmlFor="inputAmount">Amount</label>
                    <div>(negative-expense , positive-income)</div>
                </div>
                <input type="number"
                    placeholder="Enter Amount..."
                    ref={expenseAmountInput}
                    id="inputAmount"
                    required
                />
                <button>Transaction</button>
            </form>
        );
    }
export default ExpenseForm;
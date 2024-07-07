import { useEffect, useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm   =   ({
    addExpense,
    updateExpense,
    expenseToUpdate,
    resetExpenseToUpdate
    })  =>  {
        const expenseTextInput  =   useRef();
        const expenseAmountInput    =   useRef();
        
        useEffect(()=>{
           
            if(!expenseToUpdate){
                return;
            }

            expenseTextInput.current.value  =   expenseToUpdate.text;
            expenseAmountInput.current.value    =   expenseToUpdate.amount;
        
        },[expenseToUpdate])

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
            <form onSubmit={handleSubmit} className={styles.form}>
                <h3>{expenseToUpdate ? "Edit " : "Add new "}transaction</h3>
                
                <label htmlFor="inputText">Text</label>
                <input type="text" 
                    className={styles.input}
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
                    className={styles.input}
                    placeholder="Enter Amount..."
                    ref={expenseAmountInput}
                    id="inputAmount"
                    required
                />
                <button className={styles.submitBtn}>{expenseToUpdate ? "Edit " : "Add "}
                    Transaction
                </button>
            </form>
        );
    }
export default ExpenseForm;
import { useReducer, useState } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseInfo from "./ExpenseInfo/ExpenseInfo";
import ExpenseList from "./ExpenseList/ExpenseList";
import "./App.css";

const initialState  = {
  expenses:[]
};

const reducer  =  (state,action) => {
  const {payload} = action;
  switch(action.type){
    case "ADD_EXPENSE":{
      
      return{
        expenses: [payload.expense,...state.expenses] 
      }
    }
    case "REMOVE_EXPENSE":{
      return{
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      }
    }
    case "UPDATE_EXPENSE":{
      const expenseDuplicate  = [...state.expenses];
      expenseDuplicate[payload.expensePos]  = payload.expense;
      return{
        expenses: expenseDuplicate
      }
    }
    default:
      return state;
  }
} 

export default function App(){
  
  const[state,dispatch] = useReducer(reducer,initialState);
  const[expenseToUpdate,setExpenseToUpdate] = useState(null);

  const addExpense  = (expense)  =>  {
    dispatch({type:"ADD_EXPENSE",payload:{expense}});
  }

  const deleteExpense = (id)  =>  {
    dispatch({type:"REMOVE_EXPENSE",payload:{id}});
  }

  const updateExpense = (expense) => {

    const expensePos  = state.expenses.map(function(exp){
      return exp.id;
    }).indexOf(expense.id);

    if(expensePos ===  -1){
      return false;
    }

    dispatch({type:"UPDATE_EXPENSE",payload:{expensePos,expense}});
    return true;
  };

  const resetExpenseToUpdate  = ()  =>  {
    setExpenseToUpdate(null);
  }

  return(
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm 
          addExpense={addExpense} 
          updateExpense={updateExpense}
          expenseToUpdate={expenseToUpdate}
          resetExpenseToUpdate  = {resetExpenseToUpdate}
          />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList expenses={state.expenses} 
            deleteExpense={deleteExpense} 
            changeExpenseToUpdate={setExpenseToUpdate}
            />
        </div>
      </div>
    </>
  );
}
import { useState } from "react";
import EditImage from "../Images/edit.png";
import RemoveImage from "../Images/trash-bin.png";

const Transaction   =   ({
    expense,
    index,
    deleteExpense,
    changeExpenseToUpdate
}) =>{
    const [currentHoverIndex,setCurrentHoverIndex]  =   useState(null);
    return(
        <li
            key={expense.id}
            onMouseOver={()=>{
                setCurrentHoverIndex(index);
            }}
            onMouseLeave={()=>{
                setCurrentHoverIndex(null);
            }}
            >
            <div>{expense.text}</div>
            <div>
                <div>${expense.amount}</div>
                <div>
                    <div onClick={()=>{changeExpenseToUpdate(expense)}}>
                        <img src={EditImage} height="100%" alt="Edit"/>
                    </div>
                    <div onClick={()=>{deleteExpense(expense.id)}}>
                        <img src={RemoveImage} height = "100%" alt="Delete"/>
                    </div>
                </div>
            </div>
        </li>
    );
}
export default Transaction;

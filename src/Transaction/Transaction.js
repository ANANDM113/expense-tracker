import { useState } from "react";
import EditImage from "../Images/edit.png";
import RemoveImage from "../Images/trash-bin.png";
import styles from "./Transaction.module.css";

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
            className={`${styles.transaction}
                ${expense.amount    >  0 ?   styles.profit : styles.loss}`}
            >
            <div>{expense.text}</div>
            <div className={styles.transactionOptions}>
                <div className={`${styles.amount} ${currentHoverIndex===index && styles.movePrice}`}>
                    ${expense.amount}</div>
                <div className={`${styles.btnContainer} ${currentHoverIndex===index && styles.active}`}>
                    <div onClick={()=>{changeExpenseToUpdate(expense)}}
                        className={styles.edit}>
                        <img src={EditImage} height="100%" alt="Edit"/>
                    </div>
                    <div onClick={()=>{deleteExpense(expense.id)}}
                        className={styles.delete}>
                        <img src={RemoveImage} height = "100%" alt="Delete"/>
                    </div>
                </div>
            </div>
        </li>
    );
}
export default Transaction;

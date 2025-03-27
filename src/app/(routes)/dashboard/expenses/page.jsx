'use client'
import { db } from '../../../../../utils/dbConfig';
import { Budgets, Expenses } from '../../../../../utils/schema';
import { useUser } from '@clerk/nextjs';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import ExpenseListTable from './_components/ExpenseListTable';

const ExpensesRoute = () => {
    const [expensesList,setExpensesList] = useState([]);
    const {user} = useUser();
    useEffect(()=>{
       user && getAllExpenses();
    },[user])
    const getAllExpenses = async()=>{
      const result = await db.select({id:Expenses.id,name:Expenses.name,amount:Expenses.amount,createdBy:Expenses.createdBy}).from(Budgets).rightJoin(Expenses,eq(Budgets.id,Expenses.budgetId)).where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress)).orderBy(desc(Expenses.id))
      console.log(result);
      setExpensesList(result);
    }
  
  
  return (
    <div className='w-[90%] p-4 mx-auto'>
    <ExpenseListTable expensesList={expensesList} refreshData={()=> getAllExpenses()}/>
    </div>
  )
}

export default ExpensesRoute;
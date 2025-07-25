import React from 'react'
import { Progress } from 'antd'

const Analytics = ({ alltransaction }) => {
  const categories = [
    "salary",
    "tip",
    "project",
    "movie",
    "bills",
    "food",
    "medical",
    "traveling",
    "fee",
  ];
  // total transactions
  const totalTransaction = alltransaction.length;
  const totalIncomeTransaction = alltransaction.filter((transaction) =>
    transaction.type === "income"
  )
  const totalExpenseTransaction = alltransaction.filter((transaction) =>
    transaction.type === "expense"
  )

  const totalIncomePercent = (totalIncomeTransaction.length / totalTransaction) * 100;
  const totalExpensePercent = (totalExpenseTransaction.length / totalTransaction) * 100;

  // total turnover
  const totalTurnover = alltransaction.reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalIncomeTurnover = alltransaction.filter((transaction) => transaction.type === "income").reduce((acc, transaction) => acc + transaction.amount, 0)
  const totalExpenseTurnover = alltransaction.filter((transaction) => transaction.type === "expense").reduce((acc, transaction) => acc + transaction.amount, 0)
  
  const totalIncomeTurnoverPercent = (totalIncomeTurnover/totalTurnover)*100;
  const totalExpenseTurnoverPercent = (totalExpenseTurnover/totalTurnover)*100;
  

  return (
    <>
      <div className="row m-3">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Total Transaction: {totalTransaction}
            </div>
            <div className="card-body">
              <h5 className='text-success'>Total Income: {totalIncomeTransaction.length}</h5>
              <h5 className='text-danger'>Total Expence: {totalExpenseTransaction.length}</h5>
              <div>
                <Progress
                  type='circle'
                  strokeColor={'green'}
                  className='mx-2'
                  percent={totalIncomePercent.toFixed(0)}
                />

                <Progress
                  type='circle'
                  strokeColor={'red'}
                  className='mx-2'
                  percent={totalExpensePercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Total Turnover: {totalTurnover}
            </div>
            <div className="card-body">
              <h5 className='text-success'>Income: {totalIncomeTurnover}</h5>
              <h5 className='text-danger'>Expence: {totalExpenseTurnover}</h5>
              <div>
                <Progress
                  type='circle'
                  strokeColor={'green'}
                  className='mx-2'
                  percent={totalIncomeTurnoverPercent.toFixed(0)}
                />

                <Progress
                  type='circle'
                  strokeColor={'red'}
                  className='mx-2'
                  percent={totalExpenseTurnoverPercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-3">
        <div className="col-md-4">
          <h5>Categoriwise Income</h5>
          {categories.map((category)=>{
            const amount = alltransaction.filter((transaction)=> transaction.type === "income" && transaction.category === category).reduce((acc, transaction)=> acc + transaction.amount, 0);
            return(
              amount>0 && (
                <div className="card">
                  <div className="card-body">
                    <h5>{category}</h5>
                    <Progress
                    percent={((amount/totalIncomeTurnover)*100).toFixed(0)}
                     />
                  </div>
                </div>
               )
            )
          })}
        </div>
        <div className="col-md-4">
          <h5>Categoriwise Expense</h5>
          {categories.map((category)=>{
            const amount = alltransaction.filter((transaction)=> transaction.type === "expense" && transaction.category === category).reduce((acc, transaction)=> acc + transaction.amount, 0);
            return(
              amount>0 && (
                <div className="card">
                  <div className="card-body">
                    <h5>{category}</h5>
                    <Progress
                    percent={((amount/totalExpenseTurnover)*100).toFixed(0)}
                     />
                  </div>
                </div>
               )
            )
          })}
        </div>
      </div>

      
    </>
  )
}

export default Analytics
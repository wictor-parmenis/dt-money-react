import { useTransactions } from "../context/TransactionsContext"

function useSummary() {
    const {transactions} = useTransactions()
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'income') {
            acc.income += transaction.price
            acc.total += transaction.price
        } else {
            acc.outcome += transaction.price
            acc.total -= transaction.price
        }
        
        return acc;
    }, 
    {
        outcome: 0,
        income: 0,
        total: 0
    })

    return summary
}

export {useSummary}
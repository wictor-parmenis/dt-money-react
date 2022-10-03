import React from 'react'
import Header from '../../components/Header'
import Summary from '../../components/Summary'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'

import {
  PriceHighLigth,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import SearchForm from './_components/SearchForm'
import { TransactionsContext } from '../../context/TransactionsContext'

export interface ITransaction {
  id: number
  description: string
  type: 'income' | `outcome`
  category: string
  price: number
}

const Transactions: React.FC = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <PriceHighLigth variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighLigth>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}

export default Transactions

import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
import { useTransactions } from '../../context/TransactionsContext';
import { dateFormatter, priceFormatter } from '../../utils/formatter';

import { PriceHighLigth, TransactionsContainer, TransactionsTable } from './styles';
import SearchForm from './_components/SearchForm';

export interface ITransaction {
  id: number;
  description: string;
  type: 'income' | `outcome`;
  category: string;
  price: number;
}
   

const Transactions: React.FC = () => {

  const {transactions} = useTransactions()

  return (
    <>
        <Header/>
        <Summary />
        <TransactionsContainer>
          <SearchForm />
          <TransactionsTable>
            <tbody>
              {
                transactions.map((transaction) => (
                  <tr>
                  <td>{transaction.description}</td>
                  <td>
                    <PriceHighLigth variant='income'>
                      {
                        transaction.type === 'outcome' && '- '
                      }
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLigth>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
                ))
              }
            </tbody>
          </TransactionsTable>
        </TransactionsContainer> 
    </>
  )
}

export default Transactions;
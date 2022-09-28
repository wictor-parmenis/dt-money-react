import React from 'react';
import Header from '../../components/Header';
import Summary from '../../components/Summary';

import { PriceHighLigth, TransactionsContainer, TransactionsTable } from './styles';
import SearchForm from './_components/SearchForm';

const Transactions: React.FC = () => {

  return (
    <>
        <Header/>
        <Summary />
        <TransactionsContainer>
          <SearchForm />
          <TransactionsTable>
            <tbody>
              <tr>
                <td>Desenvolvimento de site</td>
                <td>
                  <PriceHighLigth variant='income'>
                    R$ 12.000,00
                  </PriceHighLigth>
                </td>
                <td>Venda</td>
                <td>13/04/2022</td>
              </tr>

              <tr>
                <td>Pintura da casa</td>
                <td>
                  <PriceHighLigth variant='outcome'>
                    -R$ 1.000,00
                  </PriceHighLigth>
                </td>
                <td>Casa</td>
                <td>10/04/2022</td>
              </tr>

            </tbody>
          </TransactionsTable>
        </TransactionsContainer> 
    </>
  )
}

export default Transactions;
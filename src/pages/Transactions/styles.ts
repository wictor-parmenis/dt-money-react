import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  /* margin-top: 1.5rem; */

  td {
    padding: 1.25rem 2rem;
    background-color: ${({ theme }) => theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-top-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-top-right-radius: 6px;
    }
  }
`

interface PriceHighLigthProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLigth = styled.span<PriceHighLigthProps>`
  color: ${({ variant, theme }) =>
    variant === 'income' ? theme['green-300'] : theme['red-300']};
`

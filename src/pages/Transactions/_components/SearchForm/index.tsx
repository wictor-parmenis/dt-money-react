import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../../context/TransactionsContext'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type ISearchFormSchema = zod.infer<typeof searchFormSchema>

const SearchForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ISearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
  })
  const loadTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.loadTransactions
    },
  )

  async function handleSearchTransactions(data: ISearchFormSchema) {
    loadTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

export default SearchForm

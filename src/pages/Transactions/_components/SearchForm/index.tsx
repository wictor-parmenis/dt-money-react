import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SearchFormContainer } from './styles';
import * as zod from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const searchFormSchema = zod.object({
  query: zod.string()
})

type ISearchFormSchema = zod.infer<typeof searchFormSchema>

const SearchForm: React.FC = () => {
  const {register, handleSubmit, formState: {isSubmitting}} = useForm<ISearchFormSchema>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchTransactions(data:ISearchFormSchema) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data, 'data')
  }

  return <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
    <input  type="text" placeholder='Busque por transações' {...register('query')}/>
    <button type='submit'
      disabled={isSubmitting}
    >
        <MagnifyingGlass />
        Buscar
    </button>
  </SearchFormContainer>
}

export default SearchForm;
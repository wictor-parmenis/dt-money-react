import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import { SearchFormContainer } from './styles';


const SearchForm: React.FC = () => {
  return <SearchFormContainer>
    <input type="text" placeholder='Busque por transações'/>
    <button type='submit'>
        <MagnifyingGlass />
        Buscar
    </button>
  </SearchFormContainer>
}

export default SearchForm;
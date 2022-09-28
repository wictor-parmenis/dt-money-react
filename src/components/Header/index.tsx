import React from 'react';
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import Logo from '../../assets/logo.svg'

const Header: React.FC = () => {
  return <HeaderContainer>
    <HeaderContent>
        <img src={Logo} alt="" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
    </HeaderContent>
  </HeaderContainer>
}

export default Header;
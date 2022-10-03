import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme['gray-800']};

  /* center of screen */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* center of screen */

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${({ theme }) => theme['gray-900']};
      color: ${({ theme }) => theme['gray-300']};

      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme['gray-500']};
      }
    }
    button[type='submit'] {
      height: 58px;
      border: 0;
      background: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${({ theme }) => theme['green-700']};
        transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      }

      &:hover {
        background: ${({ theme }) => theme['green-700']};
        transition: background-color 0.2s;
      }
    }
  }
`
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme['gray-500']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'outcome' | 'income'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background-color: ${({ theme }) => theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  color: ${({ theme }) => theme['gray-300']};

  svg {
    color: ${({ theme, variant }) =>
      variant === 'income' ? theme['green-300'] : theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background-color: ${({ theme }) => theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme, variant }) =>
      variant === 'income' ? theme['green-500'] : theme['red-500']};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`

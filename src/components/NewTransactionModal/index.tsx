import React from 'react'
import {
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as zod from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../context/TransactionsContext'

const newTransactionModalSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})

type INewTransactionModalSchema = zod.infer<typeof newTransactionModalSchema>

const NewTransactionModal: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<INewTransactionModalSchema>({
    resolver: zodResolver(newTransactionModalSchema),
  })

  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.createTransaction,
  )

  async function handleSubmitNewTransaction(
    values: INewTransactionModalSchema,
  ) {
    const { category, description, price, type } = values
    createTransaction({
      category,
      description,
      price,
      type,
    })
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          <form action="" onSubmit={handleSubmit(handleSubmitNewTransaction)}>
            <input
              type="text"
              placeholder="Descrição"
              required
              {...register('description')}
            />
            <input
              type="number"
              placeholder="Preço"
              required
              {...register('price', { valueAsNumber: true })}
            />
            <input
              type="text"
              placeholder="Categoria"
              required
              {...register('category')}
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => (
                <>
                  <TransactionType
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TransactionTypeButton variant="income" value="income">
                      <ArrowCircleUp size={24} />
                      Entrada
                    </TransactionTypeButton>

                    <TransactionTypeButton variant="outcome" value="outcome">
                      <ArrowCircleDown size={24} />
                      Saída
                    </TransactionTypeButton>
                  </TransactionType>
                </>
              )}
            />

            <button disabled={isSubmitting} type="submit">
              Cadastrar
            </button>
          </form>
        </Content>
      </Overlay>
      <p>oi</p>
    </Dialog.Portal>
  )
}

export default NewTransactionModal

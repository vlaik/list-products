import { cardProps } from 'shared/types/cardProps'

export const customPagination = (
  productsPerPage: number,
  pagination: number,
  products: cardProps[]
): cardProps[] => {
  const indexOfLastTodo = pagination * productsPerPage
  const indexOfFirstTodo = indexOfLastTodo - productsPerPage
  const currentTodos = products.slice(indexOfFirstTodo, indexOfLastTodo)
  return currentTodos
}

export const pagePaginationNumbers = (
  products: cardProps[],
  productsPerPage: number
): number[] => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i)
  }
  return pageNumbers
}

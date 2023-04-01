import { FC, useEffect, useState } from 'react'

import { ProductCard } from 'features'

import { cardProps } from 'shared/types/cardProps'

import s from './homePage.module.scss'
import { Counter } from 'components'
import {
  customPagination,
  pagePaginationNumbers,
} from 'shared/helpers/customPagination'
import { PAGE_NUMBERS } from 'shared/constants/pageNumbers'

export interface HomePageProps {
  products: cardProps[]
}

export const HomePage: FC<HomePageProps> = ({ products }) => {
  const [pagination, setPagination] = useState<number>(1)

  const pageNumbers = pagePaginationNumbers(products, PAGE_NUMBERS)

  return (
    <div className={s.wrapper}>
      {customPagination(PAGE_NUMBERS, pagination, products).map((card, idx) => (
        <ProductCard
          key={idx}
          title={card.title}
          image={card.image}
          brend={card.brend}
          badge={card.badge}
        />
      ))}
      <div className={s.pagination}>
        <Counter
          min={1}
          max={pageNumbers[pageNumbers.length - 1]}
          onChange={value => setPagination(value)}
          value={pagination}
        />
      </div>
    </div>
  )
}

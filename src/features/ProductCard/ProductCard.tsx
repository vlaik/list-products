import { FC } from 'react'

import { Badge, Button } from 'components'

import Image, { ImageProps } from 'next/image'

import s from './productCard.module.scss'

export interface ProductCardProps {
  image: ImageProps['src']
  title: string
  brend: string
  badge?: 'top' | 'new' | null
}

const ProductCard: FC<ProductCardProps> = ({ image, title, brend, badge }) => {
  return (
    <div className={s.wrapperCard}>
      <div className={s.cardImage}>
        <Image width={120} height={120} src={image} />
      </div>
      <div className={s.cardContent}>
        <div className={s.cardTitle}>{title}</div>
        {badge ? <Badge type={badge} /> : null}
        <div className={s.cardBrend}>{brend}</div>
        <Button
          variant={badge ? 'danger' : 'default'}
          block
          onClick={() => {}}
          title={'Заказать'}
        />
      </div>
    </div>
  )
}

export default ProductCard

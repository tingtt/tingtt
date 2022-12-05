import Image from 'next/image'

export type ProductCardProps = {
  id: string
  title: string
}

export const ProductCard = ({ id, title }: ProductCardProps) => {
  return (
    <div
      className={`
        card min-w-[300px] lg:min-w-[384px] duration-200 hover:scale-105
        rounded shadow-xl overflow-hidden dark:bordered dark:!border-gray-500
      `}
    >
      <label htmlFor={id}>
        <Image
          src={`/products/${id}/thumbnail.png`}
          width={400}
          height={400}
          alt={title}
        />
      </label>
    </div>
  )
}

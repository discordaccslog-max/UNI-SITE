import type { Product } from '@/lib/products'
import ProductCard from './ProductCard'
import ScrollReveal from './ScrollReveal'

interface Props {
  id?: string
  title: string
  products: Product[]
  imageRatio?: 'portrait' | 'adapt'
  showViewAll?: boolean
}

export default function ProductGrid({
  id,
  title,
  products,
  imageRatio = 'portrait',
  showViewAll = false,
}: Props) {
  return (
    <section id={id} className="page-width py-10 md:py-12">
      <ScrollReveal variant="slide-in" className="mb-8">
        <h2
          className="font-heading text-2xl md:text-3xl font-black text-ink italic"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </ScrollReveal>

      {/* 2 col mobile → 3 col tablet → 5 col desktop */}
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 lg:gap-x-8 lg:gap-y-10 list-none p-0 m-0">
        {products.map((product, i) => (
          <li key={product.handle}>
            <ScrollReveal variant="fade-in" delay={i * 0.04}>
              <ProductCard product={product} imageRatio={imageRatio} />
            </ScrollReveal>
          </li>
        ))}
      </ul>

      {showViewAll && (
        <ScrollReveal variant="fade-in" className="mt-10 text-center">
          <button className="btn-lime text-sm">View All Bulk Orders</button>
        </ScrollReveal>
      )}
    </section>
  )
}

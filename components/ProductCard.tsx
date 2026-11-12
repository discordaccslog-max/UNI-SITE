'use client'
import { useState } from 'react'
import Image from 'next/image'
import type { Product } from '@/lib/products'

interface Props {
  product: Product
  imageRatio?: 'portrait' | 'adapt'
}

export default function ProductCard({ product, imageRatio = 'portrait' }: Props) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0] ?? null
  )
  const [hovered, setHovered] = useState(false)

  const hasVariants = product.variants && product.variants.length > 1
  const showSecondary = hovered && !!product.secondaryImage

  const paddingBottom = imageRatio === 'portrait' ? '150%' : '100%'

  return (
    <div className="flex flex-col">
      {/* Image container */}
      <div
        className="relative overflow-hidden mb-3 cursor-pointer group"
        style={{ paddingBottom }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={showSecondary ? product.secondaryImage! : product.image}
          alt={product.title}
          fill
          sizes="(max-width: 749px) 50vw, (max-width: 989px) 33vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />

        {/* Badge */}
        {product.badge && (
          <div
            className="absolute top-2 left-2 text-xs font-heading font-bold uppercase px-2.5 py-1 rounded-full"
            style={{
              background: '#e3fc02',
              color: '#1f1f21',
              letterSpacing: '0.08em',
            }}
          >
            {product.badge}
          </div>
        )}

        {/* Quick-add overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        >
          <button
            className="w-full py-3 font-heading font-bold text-sm uppercase tracking-wider"
            style={{
              background: 'rgba(14,14,16,0.9)',
              backdropFilter: 'blur(4px)',
              color: '#e3fc02',
              border: 'none',
              cursor: 'default',
            }}
            onClick={(e) => e.preventDefault()}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading font-semibold text-sm text-ink leading-tight uppercase tracking-wide">
          {product.title}
        </h3>

        {/* Variant selector */}
        {hasVariants && (
          <>
            {product.variants!.length <= 5 ? (
              // Pill buttons for few variants
              <div className="flex flex-wrap gap-1.5 mt-0.5">
                {product.variants!.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className="text-xs px-3 py-1 rounded-full border transition-colors duration-150"
                    style={{
                      borderColor:
                        selectedVariant === v
                          ? 'rgba(212,175,55,0.9)'
                          : 'rgba(255,255,255,0.22)',
                      color: selectedVariant === v ? '#FFD976' : '#A5A7AC',
                      background: selectedVariant === v ? 'rgba(212,175,55,0.1)' : 'transparent',
                    }}
                  >
                    {v}
                  </button>
                ))}
              </div>
            ) : (
              // Select dropdown for many variants (e.g. 24 flavors)
              <select
                value={selectedVariant ?? ''}
                onChange={(e) => setSelectedVariant(e.target.value)}
                className="mt-0.5 text-xs py-1.5 px-2 rounded bg-bg-card text-muted border"
                style={{ borderColor: 'rgba(255,255,255,0.15)' }}
              >
                {product.variants!.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            )}
          </>
        )}

        {/* Price */}
        <p className="font-heading font-semibold text-sm text-ink mt-0.5">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  )
}

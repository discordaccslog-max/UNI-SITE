import HeroSection from '@/components/HeroSection'
import ShippingBanner from '@/components/ShippingBanner'
import ProductGrid from '@/components/ProductGrid'
import SponsorBadge from '@/components/SponsorBadge'
import RichTextCTA from '@/components/RichTextCTA'
import SiteFooter from '@/components/SiteFooter'
import HighVolumeNotice from '@/components/HighVolumeNotice'
import { singleProducts, bulkProducts } from '@/lib/products'

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero / value props */}
      <HeroSection />

      {/* Section 3: Shipping ETA banner */}
      <ShippingBanner />

      {/* Section 4: Main product grid (single units) */}
      <ProductGrid
        id="products"
        title="<em><strong>Dispensary-Sourced, Authenticated &amp; Delivered.</strong></em>"
        products={singleProducts}
        imageRatio="portrait"
      />

      {/* Section 5: Bulk orders grid */}
      <ProductGrid
        id="bulk-orders"
        title="Bulk Orders / Prices. Please contact us for any larger bulk order inquiries!"
        products={bulkProducts}
        imageRatio="adapt"
        showViewAll
      />

      {/* Section 6: Sponsor badge */}
      <SponsorBadge />

      {/* Section 7: Rich text CTA */}
      <RichTextCTA />

      {/* Section 8: Footer */}
      <SiteFooter />

      {/* Section 9: High volume notice popup */}
      <HighVolumeNotice />
    </>
  )
}

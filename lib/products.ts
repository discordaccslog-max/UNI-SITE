export interface Product {
  handle: string
  title: string
  price: number
  image: string
  secondaryImage?: string
  variantOptionName?: string
  variants?: string[]
  description: string
  badge?: string
  collection: 'single' | 'bulk'
}

const CDN = 'https://cdn.shopify.com/s/files/1/0695/1193/8137/files'

export const products: Product[] = [
  // ── single-unit collection (hh) ─────────────────────────────────────────
  {
    handle: 'boutiq-switch-v5',
    title: 'Boutiq Switch V5',
    price: 35.99,
    image: `${CDN}/7845c05f-e62c-41e4-8bce-77c8c54d6d4a_9efc1d6f-c9c4-432f-9c29-facf32da3da0.png?v=1759206391`,
    variantOptionName: 'Options',
    variants: ['Switch', 'Custom'],
    description:
      'Strain-specific terpene profiles. Tamper-proof and batch-verified. Lab-tested, batch-verified, and tamper-sealed. Includes Indica + Sativa (Switch).',
    collection: 'single',
  },
  {
    handle: 'muha-meds-limited-edition',
    title: 'Muha Meds 3rd Gen (New)',
    price: 35.99,
    image: `${CDN}/IMG_1942.jpg?v=1760363763`,
    secondaryImage: `${CDN}/fa9f46e0-ab92-4d26-a23f-c7de896c9bb0.png?v=1760363763`,
    variantOptionName: 'Options',
    variants: ['Hybrid', 'Sativa', 'Indica'],
    description:
      'Strain-specific terpene profiles. Tamper-proof and batch-verified. Each cartridge is lab tested, batch verified and tamper-sealed. Ultra-refined premium distillate.',
    badge: 'NEW',
    collection: 'single',
  },
  {
    handle: 'muha-meds-x-cookies-limited-edition',
    title: 'Muha Meds x Cookies (Limited Edition)',
    price: 38.99,
    image: `${CDN}/710cfa5e-f8b3-4c34-957b-ce9291cdfe12_8b976eaa-c6d8-4c02-bc1a-822f693f0d6a.png?v=1760311336`,
    variantOptionName: 'Options',
    variants: ['Hybrid', 'Sativa', 'Indica'],
    description:
      'Newly released limited edition. Strain-specific terpene profiles. Lab tested, batch verified and tamper-sealed. Ultra-refined premium distillate.',
    badge: 'LIMITED EDITION',
    collection: 'single',
  },
  {
    handle: 'ace-ultra-premium-2g',
    title: 'Ace Ultra Premium',
    price: 35.99,
    image: `${CDN}/2025-08-16-15.41.09.jpg?v=1759006698`,
    variantOptionName: 'Options',
    variants: ['Hybrid', 'Sativa', 'Indica'],
    description:
      'Strain-specific terpene profiles. Tamper-proof and batch-verified. Each cartridge is lab tested, batch verified and tamper-sealed. Ultra-refined premium distillate.',
    collection: 'single',
  },
  {
    handle: 'geek-bar-pulse-x',
    title: 'Geek Bar Pulse',
    price: 28.99,
    image: `${CDN}/b4c233c1-1f8b-4e5c-a231-01ec7c269284_5de2f718-2f27-48b4-98e4-a0aa9ff9439d22.png?v=1759044671`,
    description: 'Geek Bar Pulse. 15,000 Puffs Regular Mode. 7,500 Puffs Pulse Mode.',
    collection: 'single',
  },
  {
    handle: 'geek-bar-pulse',
    title: 'Geek Bar Pulse X',
    price: 31.99,
    image: `${CDN}/14e38133-5113-4d44-b627-64c50bad81de2.png?v=1759044917`,
    variantOptionName: 'FLAVOR',
    variants: [
      'Strawberry Watermelon',
      'Blue Rancher',
      'Blackberry B-Pop',
      'Cool Mint',
      'Grapefruit Refresher',
      'Miami Mint',
      'Raspberry Peach Lime',
      'Sour Mango Pineapple',
      'Sour Fcuking Fab',
      'Banana Taffy Freeze',
      'Blue Razz Ice',
      'Lemon Heads',
      'Lime Berry Orange',
      'Orange Fcuking Fab',
      'Sour Apple Ice',
      'Sour Straws',
      'Strawberry B-Pop',
      'Watermelon Ice',
      'White Peach Raspberry',
      'Strawberry Colada',
      'ATL Mint',
      'Orange Dragon',
      'Pink & Blue',
      'Strawberry Kiwi Ice',
    ],
    description:
      'Geek Bar Pulse X. Over 10 Flavors. 25,000 Puffs Regular Mode. 15,000 Puffs Pulse Mode.',
    collection: 'single',
  },
  {
    handle: 'raw-garden-live-resin-1g',
    title: 'Raw Garden Live Resin (1G)',
    price: 42.99,
    image: `${CDN}/92a32d66-569e-483b-b001-c19cb128159f.png?v=1759016959`,
    variantOptionName: 'Options',
    variants: ['Hybrid', 'Sativa', 'Indica'],
    description:
      'Dispensary-sourced & batch-verified. Lab-tested for potency and safety. No fillers, no additives. Premium Live Resin Quality.',
    collection: 'single',
  },
  {
    handle: 'muha-meds-sumer-edition',
    title: 'Muha Meds (Summer Edition)',
    price: 35.99,
    image: `${CDN}/6228279a8bbf69274593cbe1_mm-logo600.webp?v=1759023738`,
    description:
      'Strain-specific terpene profiles. Tamper-proof and batch-verified. Lab-tested, batch-verified, and tamper-sealed. Ultra-refined premium distillate.',
    collection: 'single',
  },
  {
    handle: 'big-chief',
    title: 'Big Chief Cartridge (2G)',
    price: 36.99,
    image: `${CDN}/1f1d5468-6074-4637-8f3e-e681071e841d.png?v=1759045642`,
    description:
      'Strain-specific terpene profiles. Tamper-proof and batch-verified. Lab-tested, batch-verified, and tamper-sealed. Ultra-refined premium distillate.',
    collection: 'single',
  },
  {
    handle: 'wholemelts-v7-copy',
    title: 'Wholemelts V7',
    price: 32.99,
    image: `${CDN}/cf13f73b-c4fa-4f0d-ab86-e7aa8084b72f.png?v=1759019039`,
    variantOptionName: 'Options',
    variants: ['Switch'],
    description:
      'Dispensary-sourced & batch-verified. Lab-tested for potency and safety. No fillers, no additives. Premium Quality.',
    collection: 'single',
  },

  // ── bulk collection ─────────────────────────────────────────────────────
  {
    handle: '10pc-boutiq-switch-v5',
    title: '10PC Boutiq Switch V5',
    price: 135.99,
    image: `${CDN}/7845c05f-e62c-41e4-8bce-77c8c54d6d4a_9efc1d6f-c9c4-432f-9c29-facf32da3da0.png?v=1759206391`,
    variantOptionName: 'Options',
    variants: ['Switch', 'New Gen Switch'],
    description:
      'Strain-specific terpene profiles. Tamper-proof and batch-verified. Lab-tested, batch-verified, and tamper-sealed. Includes Indica + Sativa (Switch).',
    collection: 'bulk',
  },
  {
    handle: '10pc-muha-meds-x-cookies-limited-edition',
    title: '10PC Muha Meds x Cookies (Limited Edition)',
    price: 145.99,
    image: `${CDN}/710cfa5e-f8b3-4c34-957b-ce9291cdfe12_8b976eaa-c6d8-4c02-bc1a-822f693f0d6a.png?v=1760311336`,
    variantOptionName: 'Options',
    variants: ['Hybrid', 'Sativa', 'Indica'],
    description:
      'Newly released limited edition. Strain-specific terpene profiles. Lab tested, batch verified and tamper-sealed. Ultra-refined premium distillate.',
    badge: 'LIMITED EDITION',
    collection: 'bulk',
  },
  {
    handle: '10pc-ace-ultra-premium',
    title: '10PC Ace Ultra Premium',
    price: 125.99,
    image: `${CDN}/2025-08-16-15.41.09.jpg?v=1759006698`,
    variantOptionName: 'Options',
    variants: ['Hybrid', 'Sativa', 'Indica'],
    description:
      'Strain-specific terpene profiles. Tamper-proof and batch-verified. Each cartridge is lab tested, batch verified and tamper-sealed. Ultra-refined premium distillate.',
    collection: 'bulk',
  },
  {
    handle: '10pc-raw-garden-live-resin-1g',
    title: '10PC Raw Garden Live Resin (1G)',
    price: 195.99,
    image: `${CDN}/92a32d66-569e-483b-b001-c19cb128159f.png?v=1759016959`,
    variantOptionName: 'Options',
    variants: ['Hybrid', 'Sativa', 'Indica'],
    description:
      'Dispensary-sourced & batch-verified. Lab-tested for potency and safety. No fillers, no additives. Premium Live Resin Quality.',
    collection: 'bulk',
  },
  {
    handle: '10pc-wholemelts-v7',
    title: '10PC Wholemelts V7',
    price: 120.99,
    image: `${CDN}/cf13f73b-c4fa-4f0d-ab86-e7aa8084b72f.png?v=1759019039`,
    variantOptionName: 'Options',
    variants: ['Switch'],
    description:
      'Dispensary-sourced & batch-verified. Lab-tested for potency and safety. No fillers, no additives. Premium Quality.',
    collection: 'bulk',
  },
  {
    handle: '20pc-ace-ultra-premium',
    title: '20PC Ace Ultra Premium',
    price: 205.99,
    image: `${CDN}/2025-08-16-15.41.09.jpg?v=1759006698`,
    variantOptionName: 'Options',
    variants: ['Hybrid', 'Sativa', 'Indica'],
    description:
      'Strain-specific terpene profiles. Tamper-proof and batch-verified. Each cartridge is lab tested, batch verified and tamper-sealed. Ultra-refined premium distillate.',
    collection: 'bulk',
  },
]

export const singleProducts = products.filter((p) => p.collection === 'single')
export const bulkProducts = products.filter((p) => p.collection === 'bulk')

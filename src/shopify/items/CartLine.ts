import type { VariantItem } from "./VariantItem"

export class CartLine {

  id: string
  title: string
  image: string
  quantity: number
  quantityAvailable: number
  merchandiseId: string
  price: number
  compareAtPrice: number
  totalPrice: number
  variants: Array<VariantItem> = Array<VariantItem>()
  selectedVariant: VariantItem


  constructor(id: string, merchandiseId: string, product: any, variants: Array<VariantItem>, price: number, compareAtPrice: number, image: string, quantity: number, quantityAvailable: number) {
    this.id = id
    this.title = product.title
    this.variants = variants
    this.image = image
    this.quantity = quantity
    this.quantityAvailable = quantityAvailable
    this.merchandiseId = merchandiseId
    this.price = price
    this.compareAtPrice = compareAtPrice
    this.totalPrice = this.price * this.quantity

    let select: any = this.variants.find((variant: any) => { return variant.id == this.merchandiseId })
    this.selectedVariant = select
  }
}
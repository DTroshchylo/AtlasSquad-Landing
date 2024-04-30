import { OptionItem } from "./OptionItem"

export class VariantItem {
  id: string = ""
  title: string = ""
  quantityAvailable: number = 0
  selectedOptions: Array<OptionItem> = new Array<OptionItem>()
  image: string = ""
  images: Array<string> = new Array<string>()
  price: number = 0
  package: string = ""
  compareAtPrice: number = 0
  color: string = ""
  colorSlug: string = ""
}
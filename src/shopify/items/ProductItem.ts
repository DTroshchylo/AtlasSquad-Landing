
import { extractTextAndListItems } from "~/src/extractTextAndListItems";
import type { TagsArray } from "./TagEntry";
import { VariantItem } from "./VariantItem";

export class ProductItem {

  id: string = ""
  name: string = ""
  description: string = ""
  cursor: string = ""
  slug: string = ""
  variants: Array<VariantItem> = new Array<VariantItem>()
  defaultVariant: VariantItem
  collections: Array<any> = new Array<any>()
  mainCategory: any
  brandCategory: any

  frameMaterial: string = ""
  bridge: string = ""
  temple: string = ""
  frameHeight: string = ""
  frameWidth: string = ""

  vendor: string = ""
  productType: string = ""

  tags: TagsArray | null = null

  images: Array<any> = new Array<any>()
  showedImages: Array<any> = new Array<any>()

  descriptionItems: Array<any> = new Array<any>()

  constructor(id: string, name: string, description: string, handle: string, variants: Array<VariantItem>) {
    this.id = id
    this.name = name

    let descriptionExtract = extractTextAndListItems(description)
    this.description = descriptionExtract.textContent
    this.descriptionItems = descriptionExtract.listItems


    this.variants = variants
    this.slug = handle

    this.defaultVariant = this.variants[0]

  }

}
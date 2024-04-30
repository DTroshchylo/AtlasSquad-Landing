import { OptionItem } from "./items/OptionItem";
import { VariantItem } from "./items/VariantItem";

export class VariantFactory {
  CreateVariant(query: any): VariantItem | null {
    if (query != null) {
      const variant = new VariantItem()
      variant.id = query.id
      variant.image = query.image == null ? '' : query.image.originalSrc
      variant.price = query.priceV2.amount
      variant.quantityAvailable = query.quantityAvailable
      variant.title = query.title
      variant.compareAtPrice = query.compareAtPrice == null ? 0 : query.compareAtPrice.amount

      if (query.images != null) {
        query.images.references.nodes.forEach((image: any) => {
          variant.images.push(image.image.url)
        });
      }

      //variant.images = query.images

      query.selectedOptions.forEach((option: any) => {
        if (option.name == "Package") {
          variant.package = option.value
        }
      });

      variant.selectedOptions = query.selectedOptions.map((option: any) => {
        return new OptionItem(option.name, option.value)
      })

      variant.selectedOptions.forEach((option: OptionItem) => {
        if (option.name == "Frame Color") {
          variant.color = option.value
          variant.colorSlug = option.value.toLowerCase().replace(/ /g, '-')
        }
      });

      return variant

    } else {
      return null
    }
  }
}
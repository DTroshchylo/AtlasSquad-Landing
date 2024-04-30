import { VariantFactory } from "./VariantFactory";
import { CartLine } from "./items/CartLine";
import type { VariantItem } from "./items/VariantItem";

export class CartLineFactory {
  CreateCartLine(query: any): CartLine | null {
    if (query != null) {

      const variants = new Array<VariantItem>()
      const variantFactory = new VariantFactory()
      query.node.merchandise.product.variants.edges.forEach((variantEdge: any) => {
        const variantBuffer = variantFactory.CreateVariant(variantEdge.node)
        if (variantBuffer != null) {
          variants.push(variantBuffer)
        }
      });

      const cartLineBuffer = new CartLine(
        query.node.id,
        query.node.merchandise.id,
        query.node.merchandise.product,
        variants,
        parseInt(query.node.merchandise.priceV2.amount),
        parseInt(query.node.merchandise.compareAtPrice == null ? null : query.node.merchandise.compareAtPrice.amount),
        query.node.merchandise.product.images.edges[0].node.src,
        query.node.quantity,
        query.node.merchandise.quantityAvailable
      )

      return cartLineBuffer
    } else {
      return null
    }
  }
}
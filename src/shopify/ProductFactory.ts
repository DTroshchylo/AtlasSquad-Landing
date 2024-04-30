import { VariantFactory } from "./VariantFactory";
import { ProductItem } from "./items/ProductItem"
import type { TagsArray } from "./items/TagEntry";
import { VariantItem } from "./items/VariantItem"



export class ProductFactory {
  CreateProduct(query: any, cursor = ""): ProductItem | null {
    if (query != null) {
      const variantFactory = new VariantFactory()
      const variants = new Array<VariantItem>()
      query.variants.edges.forEach((variantEdge: any) => {
        const variantBuffer = variantFactory.CreateVariant(variantEdge.node)
        if (variantBuffer != null) {
          variants.push(variantBuffer)
        }
      });
      const productBuffer = new ProductItem(query.id, query.title, query.descriptionHtml, query.handle, variants)
      query.collections.edges.forEach((collectionEdge: any) => {
        if (collectionEdge.node.title != 'All') {
          productBuffer.collections.push({
            title: collectionEdge.node.title,
            slug: collectionEdge.node.handle,
            logo: collectionEdge.node.logo == null ? '' : collectionEdge.node.logo.reference.image.originalSrc
          })

        }
      })

      if (query.images != null) {
        query.images.edges.forEach((image: any) => {
          productBuffer.images.push({
            url: image.node.url,
            alt: image.node.altText
          })
        });
        productBuffer.showedImages = productBuffer.images.filter((image: any) => {
          return image.alt == `[${productBuffer.defaultVariant.selectedOptions[0].value}]`
        })
      }

      if (query.product_type != null) {
        productBuffer.productType = query.product_type
      }
      if (query.productType != null) {
        productBuffer.productType = query.productType
      }
      if (query.vendor != null) {
        productBuffer.vendor = query.vendor
      }

      productBuffer.mainCategory = productBuffer.collections.find((collection: any) => {
        return collection.title == productBuffer.productType
      })
      productBuffer.brandCategory = productBuffer.collections.find((collection: any) => {
        return collection.title == productBuffer.vendor ||
          collection.title == `${productBuffer.vendor} Sunglasses` ||
          collection.title == `${productBuffer.vendor} Eyeglasses` ||
          collection.title == `${productBuffer.vendor} Sun`
      })

      if (query.tags != null) {
        productBuffer.tags = query.tags.reduce((acc: TagsArray, tag: string) => {
          const [key, value] = tag.split('~');


          if (key.toLowerCase() == "shape" ||
            key.toLowerCase() == "gender" ||
            key.toLowerCase() == "rim" ||
            key.toLowerCase() == "material" ||
            key.toLowerCase() == "color" ||
            key.toLowerCase() == "price") {
            const existingEntry = acc.find(entry => entry.key === key);
            if (existingEntry) {
              existingEntry.values.push(value);
            } else {
              acc.push({ key, values: [value] });
            }
          }


          return acc;
        }, []);
      }

      if (query.frame_material != null) {
        productBuffer.frameMaterial = query.frame_material.value
      }
      if (query.bridge != null) {
        productBuffer.bridge = query.bridge.value
      }
      if (query.temple != null) {
        productBuffer.temple = query.temple.value
      }
      if (query.frame_height != null) {
        productBuffer.frameHeight = query.frame_height.value
      }
      if (query.frame_width != null) {
        productBuffer.frameWidth = query.frame_width.value
      }

      productBuffer.cursor = cursor

      return productBuffer
    } else {
      return null
    }
  }
}
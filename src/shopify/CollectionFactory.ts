import { CollectionItem } from "./items/CollectionItem";

export class CollectionFactory {
  CreateCollection(query: any): CollectionItem | null {
    if (query.type == 'COLLECTION') {
      return new CollectionItem(
        query.id, query.title,
        query.resource.descriptionHtml,
        `${query.url.slice(query.url.indexOf("collections/") + 12)}`,
        query.type,
        query.resource.image == null ? '' : query.resource.image.small,
        query.resource.logo == null ? '' : query.resource.logo.reference.image.originalSrc,
        query.resource.image_glasses == null ? '' : query.resource.image_glasses.reference.image.originalSrc,
      )
    } else {
      return null
    }
  }
}
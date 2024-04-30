export class CollectionItem {
  id: string = ""
  name: string = ""
  description: string = ""
  slug: string = ""
  image: string = ""
  type: string = ""
  logo: string = ""
  imageGlasses: string = ""

  constructor(id: string, name: string, description: string, slug: string, type: string, image: string, logo: string, imageGlasses: string) {
    this.id = id
    this.type = type
    this.name = name
    this.description = description
    this.slug = slug
    this.image = image
    this.logo = logo
    this.imageGlasses = imageGlasses
  }

  toJSON() {
    return { ...this }
  }
}
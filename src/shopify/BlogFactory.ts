import { BlogItem } from "./items/BlogItem";

export class BlogFactory {
  CreateShortBlogItem(query: any): BlogItem | null {
    if (query != null) {
      const blogItem = new BlogItem(query.id, query.title, query.handle, query.publishedAt, query.image.originalSrc)
      return blogItem
    }
    return null
  }
  CreateBlogItem(query: any): BlogItem | null {
    if (query != null) {
      const blogItem = new BlogItem(query.id, query.title, query.handle, query.publishedAt, query.image.originalSrc, query.contentHtml)
      return blogItem
    }
    return null
  }
}
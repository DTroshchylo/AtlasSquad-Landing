export class BlogItem {

  id: string = ""
  title: string = ""
  slug: string = ""
  date: string = ""
  image: string = ""
  content: string = ""

  constructor(id: string, title: string, handle: string, publishedAt: string, image: string, contentHtml: string = '') {
    this.id = id

    let bufferDate = new Date(publishedAt)
    let bufferDay: any = bufferDate.getMonth()
    let bufferMonth: any = bufferDate.getDate() + 1

    if (bufferDay < 10) {
      bufferDay = `0${bufferDay}`
    }

    if (bufferMonth < 10) {
      bufferMonth = `0${bufferMonth}`
    }

    this.title = title
    this.slug = handle
    this.date = `${bufferDay}-${bufferMonth}-${bufferDate.getFullYear()}`
    this.image = image
    this.content = contentHtml

  }
}
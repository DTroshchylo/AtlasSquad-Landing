export function extractTextAndListItems(htmlString: string): { textContent: string, listItems: any[] } {

  if (htmlString == null || htmlString == "") {
    return {
      textContent: '',
      listItems: []
    }
  }
  const textContent = htmlString.replace(/<\/?ul>/g, '').replace(/<li><span>/g, '').replace(/<\/span><\/li>/g, '\n').replace(/<.*?>/g, '');
  const pureTextContent = textContent.split('\n').filter(line => !line.includes(':')).join(' ');

  const listItems: any[] = textContent.split('\n').filter(line => line.includes(':')).map(line => {
    const [key, value] = line.split(':').map(part => part.trim());
    const numericValue = Number(value);
    return { key, value: isNaN(numericValue) ? value : numericValue };
  });

  return { textContent: pureTextContent, listItems };
}
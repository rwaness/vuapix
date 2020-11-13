export function formatArticle(article) {
  const {
    order,
    slug,
    book,
    chapter,
    title,
  } = article.path.substr(1).split('/').reduce((acc, chunk) => {
    const [order, ...path] = chunk.split('-');
    const title = path.map(([cap, ...end]) => `${cap.toUpperCase()}${end.join('')}`).join(' ');
    return {
      order: `${(acc.order) ? `${acc.order}.` : ''}${order}`,
      slug: `${acc.slug}/${path.join('-')}`,
      book: acc.book || title,
      chapter: acc,
      title,
    };
  }, { slug: '' });
  return {
      title,
      ...article,
      order,
      slug,
      book,
      chapter,
  };
}

import { URL_DOCS } from '@/constants';

export function slugToTitle(slug) {
  return slug.split('-')
    .map(([cap, ...end]) => `${cap.toUpperCase()}${end.join('')}`)
    .join(' ');
}

export function formatArticle(article) {
  const {
    name,
    pos,
    slug,
    title,
  } = article.path.substr(1).split('/').reduce((acc, chunk) => {
    const [pos, name] = (chunk === 'index')
      ? [0, chunk]
      : chunk.split('.'); // TODO regex
    return {
      name: `/${name}`,
      pos: `${(acc.pos) ? `${acc.pos}.` : ''}${pos}`,
      slug: `${acc.slug}${name !== 'index' ? `/${name}` : ''}`,
      title: name !== 'index' ? slugToTitle(name) : acc.title,
    };
  }, { slug: URL_DOCS });
  return {
      title,
      ...article,
      name,
      pos,
      slug,
  };
}

export function buildTree([ ...articles ]) {
  let dirPos = '';
  const builder = (tree, article, index, allArticles) => {
    if (article.pos.startsWith(dirPos.substr(1))) {
      const depth = dirPos.split('.').length;
      const arrPos = article.pos.split('.');
      const currPos = arrPos[depth - 1];
      if (!tree[currPos]) {
        const arrPath = article.slug.split('/').slice(URL_DOCS.split('/').length - 1);
        if (depth === arrPos.length) {
          tree[currPos] = article;
        } else {
          dirPos = `${dirPos}.${currPos}`;
          tree[currPos] = {
            title: slugToTitle(arrPath[depth]),
            slug: article.slug,
            children: allArticles.reduce(builder, []).filter(Boolean),
          };
          dirPos = dirPos.split('.').slice(0, -1).join('.');
        }
      }
    }
    return tree;
  };

  return articles
    .sort((a1, a2) => a1.pos < a2.pos ? -1 : 1)
    .reduce(builder, []).filter(Boolean);
}
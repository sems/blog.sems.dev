export default {
    title: `My first (time) blog(ging)!`,
    tags: ['first', 'talk'],
    spoiler: "Talking about the different types of subjects I will be talking about. Give a small introduction.",
    getContent: () => import('./document.mdx'),
  }
const linkResolver = (doc) => {
  // URL for a blog-post type
  if (doc.type === 'blog_post') {
    return `/blog/${doc.uid}`
  }

  // Backup for all other types
  return '/'
}

module.exports = linkResolver;
export function findDemoOrPosterBySlug(acceptedSubmissions, slug) {
  const demo = acceptedSubmissions.demos.find((demo) => (demo.slug === slug));

  if (demo === undefined) {
    return acceptedSubmissions.posters.find((poster) => (poster.slug === slug));
  }

  return demo;
}

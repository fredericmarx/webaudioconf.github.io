export function findPresentationBySlug(acceptedSubmissions, slug) {
  const paper = acceptedSubmissions.papers.find((paper) => (paper.slug === slug));

  if (paper === undefined) {
    return acceptedSubmissions.talks.find((talk) => (talk.slug === slug));
  }

  return paper;
}

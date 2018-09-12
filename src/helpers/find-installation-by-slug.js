export function findInstallationBySlug(acceptedSubmissions, slug) {
  return acceptedSubmissions.installations.find((installation) => (installation.slug === slug));
}

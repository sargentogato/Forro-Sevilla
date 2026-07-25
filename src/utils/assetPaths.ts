export const resolveAssetPath = (path: string) => {
  if (!path) return "";

  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  const basePath = import.meta.env.BASE_URL || "/";

  return `${basePath}${normalizedPath}`.replace(/\/+/g, "/");
};

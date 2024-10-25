const isGithubPages = process.env.NODE_ENV === 'production';
const basePath = isGithubPages ? '/daniely' : '';

export const cursorPaths = {
  default: `${basePath}/cursor/default.svg`,
  text: `${basePath}/cursor/text.svg`,
  link: `${basePath}/cursor/link.svg`,
} as const;

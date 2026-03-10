const languageKeywords = new Set(["go", "golang", "java"]);
const roleKeywords = new Set(["developer", "engineer"]);
const otherKeywords = new Set([
  "web",
  "software",
  "back",
  "backend",
  "full",
  "fullstack",
]);

export function matches(title) {
  const wordSet = new Set(
    title
      .replace(/[^a-zA-Z0-9]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase()
      .split(/\s+/),
  );

  for (const keyword of languageKeywords) {
    if (wordSet.has(keyword)) {
      return true;
    }
  }

  for (const role of roleKeywords) {
    if (wordSet.has(role)) {
      for (const keyword of otherKeywords) {
        if (wordSet.has(keyword)) {
          return true;
        }
      }
    }
  }

  return false;
}

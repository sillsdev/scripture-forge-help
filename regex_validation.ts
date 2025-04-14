export interface RegexValidation {
  expression: RegExp;
  message: string;
  filesToSkip?: string[];
}

export const regexValidations: RegexValidation[] = [
  {
    expression: /^---\n(.*?)\n---/s,
    message: "front matter"
  },
  {
    expression: /(?:(?=)({#[\d\w]+}))/gs,
    message: "anchor",
    filesToSkip: ["Community-Checking/enable-community-checking.md", "Draft-Generation/generating-a-draft.md"]
  },
  {
    expression: /(?:(?=)(!\[\]\(\.\/[\d]+\.png\)))/gs,
    message: "image",
    filesToSkip: ["connect-paratext-project.md"]
  }
]

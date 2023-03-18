
export function getSourcePreviewParams(pathList: string[]) {
  const parameters = pathList.map(path => {
    const fileName = path.split('/').pop();
    const extension = fileName.split('.').pop();
    return {
      tab: fileName,
      path: `./dist/app${path}`,
      language: getLangauage(extension)
    };
  });
  return { sourcePreview: parameters }
}

/**
 * List of supported languages:
 * https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_HLJS.MD
 * @param extension
 */
function getLangauage(extension: string): string {
  switch (extension) {
    case 'ts': return 'typescript';
    case 'js': return 'javascript';
    case 'scss':
    case 'html':
      return extension;
    default: return 'tsx';
  }
}

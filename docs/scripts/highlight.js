const hljsSimpleChangesDefinitions = {
  case_insensitive: true,
  contains: [
    { className: "attribute", begin: "\\[", end: "\\]" },
    { className: "keyword", begin: "-", end: " " },
    hljs.COMMENT("/\\*", "\\*/", { relevance: 0 }),
  ],
};
hljs.registerLanguage("simplechanges", function (e) {
  return hljsSimpleChangesDefinitions;
});
hljs.initHighlighting();

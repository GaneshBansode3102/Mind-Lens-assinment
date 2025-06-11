// import React from 'react';
// import CodeEditorPreview from './CodeEditorPreview';
// import MarkdownViewer from './MarkdownViewer';
// import TablePreview from './TablePreview';
// import SlideViewer from './SlideViewer';

// export default function OutputRenderer({ response }) {
//   if (!response) return null;

//   if (response.type === 'code') {
//     return <CodeEditorPreview code={response.content} />;
//   }

//   if (response.type === 'markdown') {
//     return <MarkdownViewer content={response.content} />;
//   }

//   if (response.type === 'table' || response.type === 'image') {
//     return <TablePreview content={response.content} />;
//   }

//   if (response.type === 'slides') {
//     return <SlideViewer slides={response.content} />;
//   }

//   return <p>{response.content}</p>;
// }

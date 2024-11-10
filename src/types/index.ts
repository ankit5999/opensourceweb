// export interface Database {
//   id: string;
//   name: string;
//   installation?: string;
//   configuration: string;
//   manualLogging: string;
// }

// types.ts

// types.ts

export interface ContentSection {
  type: 'title' | 'paragraph' | 'code' | 'button';
  text?: string;
  language?: string;
  code?: string;
  label?: string;
  url?: string;
}

export interface Database {
  id: string;
  name: string;
  installation?: string;
  configuration?: string;
  manualLogging?: string;
  content: ContentSection[]; // Make content a required field
}


export interface IOption {
  key: string;
  value: string;
}

export interface IPrompt {
  id: string;
  title: string;
  version: string;
  description: string;
  departments: string[];
  categories: string[];
  aiModel: string;
  promptText: string;
  author: string;
  temperature: number;
  topP: number;
  maxResponse: number;
}

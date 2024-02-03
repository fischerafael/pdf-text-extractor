/**
 * V0 - duration (string), createdAt (02-02-2024), duration ('3.00'), task string
 * V1 - duration (string), createdAt (02-02-2024), duration ('3.00'), task string, version string
 * **/

interface ITaskV0 {
  duration: string; // '3.00'
  createdAt: string; // 02-02-2024
  task: string; // string
  category: string; // string
}

interface ITaskV1 extends ITaskV0 {
  version?: "V1";
  company?: string; // { id: string, name: string }
}

export type ITask = ITaskV1;

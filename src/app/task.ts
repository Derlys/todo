export interface Task {
  description: string;
  done:boolean;
  id: number;

}
export type TaskFilter = "all" | "open" | "done"

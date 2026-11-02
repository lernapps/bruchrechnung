import { fill } from "./BruchMath.ts";
export interface Props {
  task: string;
  mode?: string;
  mistakes: string[];
}
export interface Task {
  z: number;
  n: number;
  mode: string;
}
export type Answer = number;
export function generate(seed: number, props: Props): Task {
  const n = [3, 4, 5, 6, 8, 10, 12][(seed - 1) % 7] ?? 4;
  const z = props.mode === "mixed" ? n + 1 + (seed % Math.max(1, n - 1)) : 1 + (seed % Math.max(1, n - 1));
  return { z, n, mode: props.mode ?? "mark" };
}
export function check(task: Task, answer: unknown): boolean {
  return typeof answer === "number" && Number.isInteger(answer) && answer === task.z;
}
export const solution = (task: Task): Answer => task.z;
export const wrong = (task: Task): Answer => task.z + 1;
export const mistakes = (task: Task): Answer[] => [wrong(task), 0];
export const show = (answer: unknown, task: Task): string => `${String(answer)}/${task.n}`;
export const template = (props: Props): string => props.task;
export const params = (task: Task): Record<string, number> => ({ z: task.z, n: task.n });
export const describe = (task: Task, props: Props) => ({
  task: fill(props.task, params(task)),
  solution: `${task.z}/${task.n}: ${task.z} gleich große Teile bei ${task.n} Teilen pro Ganzem.`,
});
export const reason = (task: Task, answer: unknown, props: Props) =>
  fill(props.mistakes[answer === 0 ? 1 : 0] ?? "", params(task));
export const about = {
  task: "Einen vorgegebenen Bruch durch Markieren gleich großer Teile oder Platzieren auf dem Zahlenstrahl darstellen.",
  answer: "Anzahl der markierten Teile bzw. gewählter Teilstrich; anschließend Prüfen drücken.",
  correct: "Auswahl entspricht dem vorgegebenen Bruch; Anordnung ausgewählter Teile ist frei.",
  mistakes: ["Ein Teil zu viel bzw. um einen Teilstrich versetzt.", "Kein Teil ausgewählt."],
};

import { equal, fill, gcd, parse, reduce } from "./BruchMath.ts";
export interface Props {
  kind: string;
  task: string;
  mistakes: string[];
}
export interface Task {
  kind: string;
  z: number;
  n: number;
  b: number;
  d: number;
  f: number;
  G: number;
  part: number;
  rz: number;
  rn: number;
}
export type Answer = string;
export function generate(seed: number, p: Props): Task {
  const n = [3, 4, 5, 6][(seed - 1) % 4] ?? 4;
  const z = 1 + (Math.floor((seed - 1) / 4) % (n - 1));
  const f = 2;
  const G = n * (2 + (seed % 5));
  const part = (z * G) / n;
  const t: Task = { kind: p.kind, z, n, b: 1, d: n === 3 ? 4 : 3, f, G, part, rz: 0, rn: 1 };
  switch (p.kind) {
    case "expand":
      t.rz = z * f;
      t.rn = n * f;
      break;
    case "reduce":
      t.z = z * f;
      t.n = n * f;
      {
        const q = reduce(z, n);
        t.rz = q.z;
        t.rn = q.n;
      }
      break;
    case "compare":
      t.b = 2;
      t.d = 3;
      t.rz = z * 3 - 2 * n;
      break;
    case "part":
      t.rz = part;
      break;
    case "whole":
      t.rz = G;
      break;
    case "ratio":
      t.rz = z;
      t.rn = n;
      break;
    case "subtract":
      t.b = 1;
      t.d = n;
      t.z = Math.max(2, z);
      t.rz = t.z - 1;
      t.rn = n;
      break;
    case "multiply":
      t.b = 2;
      t.d = 3;
      t.rz = z * 2;
      t.rn = n * 3;
      break;
    case "divide":
      t.b = 1;
      t.d = n * 2;
      t.rz = z * 2;
      break;
    default:
      t.rz = z * t.d + t.b * n;
      t.rn = n * t.d;
  }
  return t;
}
export function check(t: Task, a: unknown): boolean {
  if (typeof a !== "string") return false;
  if (t.kind === "compare") return a === (t.rz < 0 ? "<" : t.rz > 0 ? ">" : "=");
  const q = parse(a);
  if (!q) return false;
  if (t.kind === "expand") return q.z === t.rz && q.n === t.rn;
  if (t.kind === "reduce") return equal(q, { z: t.rz, n: t.rn }) && gcd(q.z, q.n) === 1;
  return equal(q, { z: t.rz, n: t.rn });
}
export const solution = (t: Task): string =>
  t.kind === "compare" ? (t.rz < 0 ? "<" : t.rz > 0 ? ">" : "=") : `${t.rz}/${t.rn}`;
export const wrong = (t: Task): string => (t.kind === "compare" ? (t.rz < 0 ? ">" : "<") : `${t.rz + t.rn}/${t.rn}`);
export const mistakes = (t: Task): string[] => [wrong(t), ""];
export function params(t: Task): Record<string, number> {
  const values: Record<string, number> = { z: t.z, n: t.n, b: t.b, d: t.d, f: t.f };
  if (t.kind === "part" || t.kind === "ratio") values["G"] = t.G;
  if (t.kind === "whole" || t.kind === "ratio") values["part"] = t.part;
  return values;
}
export const template = (p: Props): string => p.task;
export const show = (answer: unknown): string => (String(answer) === "" ? "Keine Eingabe" : String(answer));
export function reason(t: Task, a: unknown, p: Props): string {
  let index = 0;
  if (typeof a !== "string" || a.trim() === "") index = 1;
  else if (t.kind !== "compare") {
    const input = parse(a);
    if (!input) index = 1;
    else if (equal(input, { z: t.rz, n: t.rn })) {
      if (t.kind === "reduce" && gcd(input.z, input.n) > 1) index = 2;
      else if (t.kind === "expand") index = 3;
    }
  }
  return fill(p.mistakes[index] ?? p.mistakes[0] ?? "", params(t));
}
export function describe(t: Task, p: Props): { task: string; solution: string } {
  const q = t.rz >= 0 ? reduce(t.rz, t.rn) : { z: t.rz, n: t.rn };
  const result = q.n === 1 ? String(q.z) : `${q.z}/${q.n}`;
  const common = t.n * t.d;
  const paths: Record<string, string> = {
    expand: `Zähler und Nenner mit ${t.f} multiplizieren: ${t.z} · ${t.f} = ${t.rz} und ${t.n} · ${t.f} = ${t.rn}. Der erweiterte Bruch lautet ${t.rz}/${t.rn}.`,
    reduce: `Zähler und Nenner durch ${gcd(t.z, t.n)} teilen. So entsteht ${result}; die beiden Zahlen haben keinen gemeinsamen Teiler größer als 1.`,
    compare: `Vergleiche ${t.z * t.d}/${common} und ${t.b * t.n}/${common}. Die gleich großen Teilstücke machen die Zähler vergleichbar. Das passende Zeichen ist ${solution(t)}.`,
    part: `${t.G} Gegenstände auf ${t.n} Gruppen verteilen: ${t.G / t.n} pro Gruppe. ${t.z} Gruppen enthalten ${t.part} Gegenstände.`,
    whole: `${t.part} Gegenstände bilden ${t.z} Gruppen. Eine Gruppe hat ${t.part / t.z} Gegenstände. Alle ${t.n} Gruppen haben zusammen ${t.G} Gegenstände.`,
    ratio: `Der Anteil ist Bruchteil geteilt durch Ganzes: ${t.part}/${t.G}. Kürzen ergibt ${result}.`,
    add: `Gemeinsam unterteilen: ${t.z * t.d}/${common} + ${t.b * t.n}/${common}. Zähler addieren, Nenner beibehalten und gegebenenfalls kürzen: ${result}.`,
    subtract: `Die Teile haben denselben Nenner ${t.n}. ${t.z} Teile minus ${t.b} Teil ergibt ${t.rz}/${t.rn}, also ${result}.`,
    multiply: `${t.b}/${t.d} von ${t.z}/${t.n}: Wähle ${t.b} von ${t.d} Zeilen der ${t.z} ausgewählten Spalten. Das sind ${t.rz} von ${t.rn} Feldern, also ${result}.`,
    divide: `${t.z}/${t.n} sind ${t.z * 2}/${t.d}. Darin passen ${t.z * 2} Stücke der Größe 1/${t.d}.`,
  };
  return { task: fill(p.task, params(t)), solution: paths[t.kind] ?? result };
}
export const about = {
  task: "Bruchmodell verändern, fehlende Größe berechnen oder Brüche vergleichen; die Frage nennt den gesuchten Wert.",
  answer: "Bruch als Zähler/Nenner, ganze Zahl oder Vergleichszeichen eingeben; danach Prüfen drücken.",
  correct:
    "Exakte Wertgleichheit, bei Erweiterung der verlangte Nenner, beim vollständigen Kürzen kein gemeinsamer Teiler größer als 1.",
  mistakes: ["Ergebnis um eine Einheit verschoben oder Vergleichszeichen vertauscht.", "Keine Antwort eingegeben."],
};

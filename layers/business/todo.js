import { getToDos, setToDos } from "../data/todos";

export async function newToDo(title, func) {
  const todos = await getAllToDo();

  todos.push(title);

  await setToDos(JSON.stringify(todos));
  func();
}

export async function getAllToDo() {
  const todos = (await getToDos()) || [];
  return typeof todos === "string" ? JSON.parse(todos) : todos;
}

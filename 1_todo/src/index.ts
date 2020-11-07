// 할일아이템 타입 정의
interface Todo {
  id: number;
  title: string;
  done: boolean;
}

// 할일 목록 선언
let todoItems: Todo[];

// 할일 api 불러오기
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: "영화보기", done: false },
    { id: 2, title: "스크립트", done: false },
    { id: 3, title: "와이어프레임 작성", done: false },
  ];
  return todos;
}

// 할일 crud
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// 첫번째 할일아이템 보여주기
function logFirstTodo(): object {
  return todoItems[0];
}

// 완료된 할일아이템 보여주기
function showCompleted(): object[] {
  return todoItems.filter(item => item.done);
}

// 2개의 할일아이템 추가
function addTwoTodoItems(): void {
  const item1 = {
    id: 4,
    title: "투두아이템 4",
    done: false,
  };
  const item2 = {
      id: 5,
      title: "투두아이템 5",
      done: false,
  };
  addTodo(item1);
  addTodo(item2);
}

// 유틸함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();

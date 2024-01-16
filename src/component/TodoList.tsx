import { useContext } from 'react';
import { TodoItem } from './TodoItem';
import { TodosContext } from '../TodosContext';
// eslint-disable-next-line import/order
import * as React from 'react';

export default function TodoList() {
  const {
    todos,
    setTodos,
    isToggleAllStatus,
    setIsToggleAllStatus,
    todosFilter,
  } = useContext(TodosContext);

  const filterTodos = todosFilter();

  const handleToggleAll = () => {
    setTodos(todos.map(todo => ({
      ...todo,
      completed: !isToggleAllStatus,
    })));
    setIsToggleAllStatus(!isToggleAllStatus);
  };

  return (
    <>
      {!!todos.length && (
        <section className="main">

          <label htmlFor="toggle-all">
            Mark all as complete

            <input
              checked={isToggleAllStatus}
              type="checkbox"
              id="toggle-all"
              className="toggle-all"
              data-cy="toggleAll"
              onChange={handleToggleAll}
            />
          </label>

          <ul className="todo-list" data-cy="todoList">
            {filterTodos.map(todo => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

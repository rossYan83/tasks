import React, { Component } from 'react';
import {
  Wrapper,
  Title,
  AddRow,
  Input,
  AddButton,
  Counter,
  List,
  TaskItem,
  TaskText,
  DeleteButton,
  EmptyState,
} from './TaskList.styles.jsx';

class TaskList extends Component {
  // Tasks stored as instance property — no state used
  tasks = [
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Read a book for 30 minutes' },
    { id: 3, text: 'Go for a morning run' },
    { id: 4, text: 'Write project documentation' },
  ];

  nextId = 5;
  inputRef = React.createRef();

  handleDelete = (id) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.forceUpdate();
  };

  handleAdd = () => {
    const value = this.inputRef.current.value.trim();
    if (!value) return;
    this.tasks = [...this.tasks, { id: this.nextId++, text: value }];
    this.inputRef.current.value = '';
    this.inputRef.current.focus();
    this.forceUpdate();
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') this.handleAdd();
  };

  render() {
    return (
      <Wrapper>
        <Title>Task List</Title>

        <AddRow>
          <Input
            ref={this.inputRef}
            type="text"
            placeholder="Add a new task…"
            onKeyDown={this.handleKeyDown}
          />
          <AddButton onClick={this.handleAdd}>+ Add</AddButton>
        </AddRow>

        {this.tasks.length > 0 && (
          <Counter>
            {this.tasks.length} task{this.tasks.length !== 1 ? 's' : ''}
          </Counter>
        )}

        <List>
          {this.tasks.length === 0 ? (
            <EmptyState>No tasks yet. Add one above!</EmptyState>
          ) : (
            this.tasks.map((task) => (
              <TaskItem key={task.id}>
                <TaskText>{task.text}</TaskText>
                <DeleteButton onClick={() => this.handleDelete(task.id)}>
                  Delete
                </DeleteButton>
              </TaskItem>
            ))
          )}
        </List>
      </Wrapper>
    );
  }
}

export default TaskList;
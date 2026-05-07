// todo 的状态（全选、全不选、反选）
// 数据管理

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, name: 'Complete this challenge', completed: true },
    { id: 2, name: 'Go grocery shopping', completed: false },
    { id: 3, name: 'Clean the house', completed: false },
    { id: 4, name: 'Finish the project', completed: false },
    { id: 5, name: 'Call a friend', completed: false },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // action.payload 是一个 task 对象，包含 id、name 和 completed 属性
    // 添加
    addTask(state, action) {
      state.tasks.push(action.payload);
    },

    // 切换完成状态
    toggleTask(state, action) {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },

    // 删除
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },

    // 全选
    selectAll(state) {
      state.tasks.forEach((t) => (t.completed = true));
    },

    // 全不选
    deselectAll(state) {
      state.tasks.forEach((t) => (t.completed = false));
    },

    // 反选
    toggleAll(state) {
      state.tasks.forEach((t) => (t.completed = !t.completed));
    },

    // 修改任务名称
     changeTaskName(state, action) {
      const { id, newName } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.name = newName;
      }
    }
  },
});

export const { addTask, toggleTask, deleteTask, selectAll, deselectAll, toggleAll, changeTaskName } = todoSlice.actions;
export default todoSlice.reducer;

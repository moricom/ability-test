import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HeaderContext } from "../Types";
type State = {
  context: HeaderContext;
};

const initialState: State = {
  context: {
    isShow: true,
  },
};
const headerModule = createSlice({
  name: "context",
  initialState,
  reducers: {
    switchDisplay(state: State, action: PayloadAction<boolean>) {
      state.context.isShow = action.payload;
      // state.count++;
      // const newTask: Task = {
      //   id: state.count,
      //   title: action.payload,
      //   done: false,
      // };
      // state.tasks = [newTask, ...state.tasks];
    },
    // doneTask(state: State, action: PayloadAction<Task>) {
    //   const task = state.tasks.find((t) => t.id === action.payload.id);
    //   if (task) {
    //     task.done = !task.done;
    //   }
    // },
    // deleteTask(state: State, action: PayloadAction<Task>) {
    //   state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    // },
  },
});
export const { switchDisplay } = headerModule.actions;
export default headerModule;

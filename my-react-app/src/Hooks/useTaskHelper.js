import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useTaskHelper(todo, task, setTask, inputText, setInputText, newDescription) {
  const inputData = {
    id: new Date().getTime(),
    description: inputText,
    isComplete: false
  }
    const submitTask = () => {
      if (inputText){
        setTask([inputData, ...task])
        setInputText("");
      }
    }
  
    const deleteTask = () => {
      return task.filter(({id}) => id !== todo.id);
    };
  
    const updateTask = () => {
      return task.map((taskItem) =>
      taskItem.id === todo.id ? { ...taskItem, description: newDescription } : taskItem
      );
    };

  const completeTask = () => {
    return task.map((taskItem) =>
    taskItem.id === todo.id ? { ...taskItem, isComplete: !taskItem.isComplete } : taskItem
    )
  }

  const {setLocalStorage} = useLocalStorage("task", task);
    useEffect(() => {
      setLocalStorage();
    }, [setLocalStorage]);
  
    return {submitTask, deleteTask, updateTask, completeTask};
  }
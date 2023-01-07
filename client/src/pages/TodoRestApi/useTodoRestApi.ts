import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddOrUpdateTodoInput, Todo } from '../../generated/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const createDefaultValues = () => ({
  active: true,
  description: 'description' + Date.now(),
  title: 'title' + Date.now(),
});

const url = `http://localhost:4001/api`;

export const useTodoRestApi = () => {
  const [todos, setTodos] = useState<Omit<Todo, '__typename'>[]>([]);

  const { handleSubmit, register, reset } = useForm<Schema>({
    resolver,
    defaultValues: createDefaultValues(),
  });

  const onSubmit = handleSubmit((data) => {
    axios
      .post(`${url}/addOrUpdateTodo`, data)
      .then((res) => {
        setTodos([...todos, res.data]);
      })
      .catch(error);

    reset(createDefaultValues());
  });

  const handleSetTodoToEdit = (input: AddOrUpdateTodoInput) => {
    reset(input);
  };

  const handleActive = (input: Required<AddOrUpdateTodoInput>) => {
    const body = {
      ...input,
      _id: input._id as string,
      active: !input.active,
    };

    axios
      .post(`${url}/addOrUpdateTodo`, body)
      .then((res) => {
        setTodos(todos.map((item) => (item._id === body._id ? body : item)));
      })
      .catch(error);
  };

  const handleDelete = (_id: string) => {
    axios
      .delete(`${url}/todo/${_id}`)
      .then((res) => {
        setTodos(todos.filter((item) => item._id !== _id));
      })
      .catch(error);
  };

  useEffect(() => {
    axios
      .get(`${url}/todos`)
      .then((res) => {
        setTodos(res.data);
      })
      .catch(error);
  }, []);

  return {
    handleActive,
    handleDelete,
    handleSetTodoToEdit,
    onSubmit,
    register,
    todos,
  };
};

const validation = yup.object({
  _id: yup.string().nullable(true).default(null),
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  active: yup.boolean().required(),
});

type Schema = yup.InferType<typeof validation>;
const resolver = yupResolver(validation);

const error = (error: any) => console.log('error', { error });

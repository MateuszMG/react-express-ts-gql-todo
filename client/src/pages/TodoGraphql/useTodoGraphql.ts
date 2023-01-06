import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  AddOrUpdateTodoInput,
  useAddOrUpdateTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
} from '../../generated/types';

const createDefaultValues = () => ({
  active: true,
  description: 'description' + Date.now(),
  title: 'title' + Date.now(),
});

export const useTodoGraphql = () => {
  const { data } = useGetTodosQuery();
  const [addOrUpdate] = useAddOrUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const todos = data?.getTodos;

  const { handleSubmit, register, reset } = useForm<Schema>({
    resolver,
    defaultValues: createDefaultValues(),
  });

  const onSubmit = handleSubmit((data) => {
    console.log('data', data);
    const { _id, ...rest } = data;

    addOrUpdate({
      variables: { input: _id ? data : rest },
      onCompleted: (data) => {
        console.log('data', data);
      },
      onError: (error) => {
        console.log('error', { error });
      },
    });

    reset(createDefaultValues());
  });

  const handleSetEdit = (input: AddOrUpdateTodoInput) => {
    reset(input);
  };

  const handleActive = (input: AddOrUpdateTodoInput) => {
    addOrUpdate({ variables: { input: { ...input, active: !input.active } } });
  };

  const handleDelete = (_id: string) => {
    deleteTodo({ variables: { input: { _id } } });
  };

  return {
    handleActive,
    handleDelete,
    handleSetEdit,
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

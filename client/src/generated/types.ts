import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddOrUpdateTodoInput = {
  _id?: InputMaybe<Scalars['String']>;
  active: Scalars['Boolean'];
  description: Scalars['String'];
  title: Scalars['String'];
};

export type DeleteTodoInput = {
  _id: Scalars['String'];
};

export type MessageResponse = {
  __typename?: 'MessageResponse';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addOrUpdateTodo: Todo;
  deleteTodo: MessageResponse;
};


export type MutationAddOrUpdateTodoArgs = {
  input: AddOrUpdateTodoInput;
};


export type MutationDeleteTodoArgs = {
  input: DeleteTodoInput;
};

export type Query = {
  __typename?: 'Query';
  getTodos: Array<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  _id: Scalars['String'];
  active: Scalars['Boolean'];
  description: Scalars['String'];
  title: Scalars['String'];
};

export type MessageResponseFragment = { __typename?: 'MessageResponse', message: string };

export type TodoFragment = { __typename?: 'Todo', _id: string, title: string, description: string, active: boolean };

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', getTodos: Array<{ __typename?: 'Todo', _id: string, title: string, description: string, active: boolean }> };

export type AddOrUpdateTodoMutationVariables = Exact<{
  input: AddOrUpdateTodoInput;
}>;


export type AddOrUpdateTodoMutation = { __typename?: 'Mutation', addOrUpdateTodo: { __typename?: 'Todo', _id: string, title: string, description: string, active: boolean } };

export type DeleteTodoMutationVariables = Exact<{
  input: DeleteTodoInput;
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: { __typename?: 'MessageResponse', message: string } };

export const MessageResponseFragmentDoc = gql`
    fragment MessageResponse on MessageResponse {
  message
}
    `;
export const TodoFragmentDoc = gql`
    fragment Todo on Todo {
  _id
  title
  description
  active
}
    `;
export const GetTodosDocument = gql`
    query GetTodos {
  getTodos {
    ...Todo
  }
}
    ${TodoFragmentDoc}`;

/**
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
      }
export function useGetTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
        }
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>;
export type GetTodosLazyQueryHookResult = ReturnType<typeof useGetTodosLazyQuery>;
export type GetTodosQueryResult = Apollo.QueryResult<GetTodosQuery, GetTodosQueryVariables>;
export const AddOrUpdateTodoDocument = gql`
    mutation AddOrUpdateTodo($input: AddOrUpdateTodoInput!) {
  addOrUpdateTodo(input: $input) {
    ...Todo
  }
}
    ${TodoFragmentDoc}`;
export type AddOrUpdateTodoMutationFn = Apollo.MutationFunction<AddOrUpdateTodoMutation, AddOrUpdateTodoMutationVariables>;

/**
 * __useAddOrUpdateTodoMutation__
 *
 * To run a mutation, you first call `useAddOrUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOrUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOrUpdateTodoMutation, { data, loading, error }] = useAddOrUpdateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddOrUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<AddOrUpdateTodoMutation, AddOrUpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddOrUpdateTodoMutation, AddOrUpdateTodoMutationVariables>(AddOrUpdateTodoDocument, options);
      }
export type AddOrUpdateTodoMutationHookResult = ReturnType<typeof useAddOrUpdateTodoMutation>;
export type AddOrUpdateTodoMutationResult = Apollo.MutationResult<AddOrUpdateTodoMutation>;
export type AddOrUpdateTodoMutationOptions = Apollo.BaseMutationOptions<AddOrUpdateTodoMutation, AddOrUpdateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($input: DeleteTodoInput!) {
  deleteTodo(input: $input) {
    ...MessageResponse
  }
}
    ${MessageResponseFragmentDoc}`;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export type MessageResponseKeySpecifier = ('message' | MessageResponseKeySpecifier)[];
export type MessageResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addOrUpdateTodo' | 'deleteTodo' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addOrUpdateTodo?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTodo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('getTodos' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	getTodos?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TodoKeySpecifier = ('_id' | 'active' | 'description' | 'title' | TodoKeySpecifier)[];
export type TodoFieldPolicy = {
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	MessageResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageResponseKeySpecifier | (() => undefined | MessageResponseKeySpecifier),
		fields?: MessageResponseFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Todo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TodoKeySpecifier | (() => undefined | TodoKeySpecifier),
		fields?: TodoFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
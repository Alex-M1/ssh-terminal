import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'config[API_{process.env.NEXT_PUBLIC_ENVIRONMENT as "dev" | "prod" | "staging"}]',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchUsers: build.query<any, string>({
      query: (search: string) => ({
        url: 'config.users.searchUsers',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: any) => response.items,
    }),
    getUserRepos: build.query<any, string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
  }),
});

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi;

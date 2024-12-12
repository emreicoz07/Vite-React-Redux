import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOGS_API_KEY =
  "live_12dTI3AcWjS0Ybv14CtKiZkgy4iidXg0B5Pnv3M9t1JlIZtK6avszvL3FCA5xrFb";

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY);

      return headers;
    },
  }),


endpoints(builder) {
    return {
        fetchBreeds: builder.query<Breed[], number|void>({ 
            query(limit = 10){
                return ` /breeds?limit=${limit}`;
            },
          }),
        };
    }  
});

export const { useFetchBreedsQuery,  } = apiSlice;
 
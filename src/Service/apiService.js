import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const servicesApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: " http://localhost:7700" }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: `/donateProjects`,
      }),
    }),
    getProject: builder.query({
      query: (id) => ({
        url: `/donateProjects/${id}`,
      }),
    }),
    getProducts: builder.query({
      query: () => ({
        url: "/products",
      }),
    }),
    getProductDetails: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    getStories: builder.query({
      query: () => ({
        url: "/donateStory",
      }),
    }),
    getStory: builder.query({
      query: (id) => ({
        url: `/donateStory/${id}`,
      }),
    }),
    getOurStories: builder.query({
      query: () => ({
        url: "/ourStories",
      }),
    }),
    getOurStory: builder.query({
      query: (id) => ({
        url: `/ourStories/${id}`,
      }),
    }),
    getourStoriesDetails: builder.query({
      query: (id) => ({
        url: `/ourStoriesDetails/${id}`,
      }),
    }),
    getCommonProjects: builder.query({
      query: () => ({
        url: "/commonProjects",
      }),
    }),
    getCommonProjectDetails: builder.query({
      query: (id) => ({
        url: `/commonProjectDetails/${id}`,
      }),
    }),
    getBasePartners: builder.query({
      query: () => ({
        url: "/basePartners",
      }),
    }),
    getSelectPartners: builder.query({
      query: () => ({
        url: "/selectPartners",
      }),
    }),
  }),
});

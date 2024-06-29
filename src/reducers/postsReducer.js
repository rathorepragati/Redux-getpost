import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    fetchPosts: (state, action) => action.payload,
    removePost: (state, action) => state.filter(post => post.id !== action.payload),
  },
});

export const { fetchPosts, removePost } = postsSlice.actions;
export default postsSlice.reducer;

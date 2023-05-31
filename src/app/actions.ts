import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//: AsyncThunkAction<any, void, AsyncThunkConfig>
// export const getUserList = createAsyncThunk(
// 	'user/getUserList',
// 	async (page, { rejectWithValue }) => {
// 		try {
// 			const { data } = await axios.get(
// 				`https://reqres.in/api/users?per_page=4&page=${page}`
// 			);
// 			return data;
// 		} catch (error) {
// 			return rejectWithValue(error);
// 		}
// 	}
// );

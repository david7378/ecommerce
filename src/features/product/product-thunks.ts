import { URL } from '@/common/constants/url';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProduct = createAsyncThunk(
	'product/getProduct',
	async (id: number, { rejectWithValue }) => {
		try {
			const { data } = await axios.get(`${URL}${id}`);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

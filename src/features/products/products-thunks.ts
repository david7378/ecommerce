import { URL } from '@/common/constants/url';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductsList = createAsyncThunk(
	'products/getProductsList',
	async (page, { rejectWithValue }) => {
		try {
			const { data } = await axios.get(URL);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

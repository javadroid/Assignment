import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const AUTH_ENDPOINT = `${process.env.REACT_APP_CLOUD_ENDPIONT}/auth`;

// Define types for the state
interface Supervisors {
  major: string;
  minor: string;
}

interface User {
  id: string;
  lname: string;
  fname: string;
  mname: string;
  is_student: boolean;
  type: string;
  department: string;
  phoneNO: string;
  faculty: string;
  public_address: string; // Generated automatically
  private_key: string; // Generated automatically
  supervisors: Supervisors;
  email: string;
  picture: string;
  password: string;
  token: string;
}

interface UserState {
  status: string;
  error: any;
  user: User;
}

// Define initial state using the UserState interface
const initialState: UserState = {
  status: "",
  error:"",
  user: {
    id: "",
    lname: "",
    fname: "",
    mname: "",
    is_student: true,
    type: "",
    department: "",
    phoneNO: "",
    faculty: "",
    public_address: "",
    private_key: "",
    supervisors: {
      major: "",
      minor: "",
    },
    email: "",
    picture: "",
    password: "",
    token: "",
  },
};

// Define types for the signUpUser thunk arguments and return type

interface signUpUserArgs {
  lname:string;
  fname:string;
  mname:string;
  is_student:boolean;
  type:string;
  department:string;
  faculty:string;
  phoneNO:number;
  email: string;
  password: string;
}

interface signUpUserRespondes {
  user: User;
  token: string;
}

// Define types for the loginUser thunk arguments and return type
interface LoginUserArgs {
  email: string;
  password: string;
}

interface LoginUserResponse {
  user: User;
  token: string;
}

// Define a type for the rejected payload
interface RejectedPayload {
  message: any;
}

// Define the signUpUser async thunk
export const signUpUser = createAsyncThunk<signUpUserRespondes, signUpUserArgs, { rejectValue: RejectedPayload }>(
  "auth/register",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${AUTH_ENDPOINT}/register`, {...values});
      return data;
    } catch (error) {
      const axiosError = error as any;
      const errorMessage = axiosError.response?.data?.error?.message || 'An error occurred';
      return rejectWithValue({ message: errorMessage });
    }
  }
);

// Define the loginUser async thunk
export const loginUser = createAsyncThunk<LoginUserResponse, LoginUserArgs, { rejectValue: RejectedPayload }>(
  "auth/login",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${AUTH_ENDPOINT}/login`, { ...values});
      console.log(values)
      return data;
    } catch (error) {
      const axiosError = error as any;
      const errorMessage = axiosError.response?.data?.error?.message || 'An error occurred';
      return rejectWithValue({ message: errorMessage });
    }
  }
);

// Create the slice
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.status = "";
      state.error = "";
      state.user = {
        id: "",
        lname: "",
        fname: "",
        mname: "",
        is_student: true,
        type: "",
        department: "",
        phoneNO: "",
        faculty: "",
        public_address: "",
        private_key: "",
        supervisors: {
          major: "",
          minor: "",
        },
        email: "",
        picture: "",
        password: "",
        token: "",
      };
    },
    changeStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload as any;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = "";
        state.user = action.payload.user;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "An error occurred";
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = "";
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "An error occurred";
      });
  },
});

export const { logout, changeStatus } = UserSlice.actions;

export default UserSlice.reducer;

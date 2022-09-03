import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [{
        userId: 'DFI934JF',
        firstName: 'Naqash',
        lastName: 'Ahmad'
    }],
}

const stateManagement = createSlice({
    name: 'state',
    initialState,
    reducers: {
        update: (state, { payload }) => {
            state.users = payload;
        },
        updateSingleUser: (state, { payload }) => {
            const index = state.users.indexOf(state.users.find(u => u.userId === payload.userId));
            if (index > -1) {
                state.users[index]['firstName'] = payload.firstName;
                state.users[index]['lastName'] = payload.lastName;
            }
        }
    },
})


export const { update, updateSingleUser } = stateManagement.actions;
export default stateManagement.reducer;
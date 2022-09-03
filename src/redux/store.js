import { configureStore } from '@reduxjs/toolkit'

import state from './features/stateManagements';

export default configureStore({
  reducer: {
    state,
  },
})
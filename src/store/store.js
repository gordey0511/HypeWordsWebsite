import { rootReducer } from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'

export const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [api],
  })

  return { store }
}

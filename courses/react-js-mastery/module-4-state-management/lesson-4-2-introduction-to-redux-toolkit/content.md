
In this lesson, you'll learn the basics of Redux Toolkit for state management in React.

## What is Redux Toolkit?

Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.

## Core Concepts

### Store

The single source of truth for your application's state.

### Reducers

Functions that take the current state and an action as arguments, and return a new state result.

### Actions

Plain JavaScript objects that have a `type` field.

## API

### `configureStore`

A friendly abstraction over the standard Redux `createStore` function that adds good defaults to the store setup for a better development experience.

### `createSlice`

A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

```javascript
import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}

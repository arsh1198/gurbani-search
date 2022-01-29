import axios from 'axios'
import { createContext, useContext, useReducer } from 'react'

export const statusCodes = {
  IDLE: 'idle',
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR: 'error'
}

const initialState = {
  searchResults: [],
  status: statusCodes.IDLE,
  error: null
}

const actions = {
  UPDATE_RESULTS: 'UPDATE_RESULTS',
  SET_STATUS: 'SET_STATUS',
  SET_ERROR: 'SET_ERROR'
}

const searchByQuery = async query => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/search/${query}`,
    {
      params: {
        source: 1,
        searchType: 0
      }
    }
  )
  return response
}

export const ApiContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_RESULTS:
      return { ...state, searchResults: action.payload.data }
    case actions.SET_STATUS:
      return { ...state, status: action.payload.status }
    case actions.SET_ERROR:
      return { ...state, status: action.payload.error }
  }
}

const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { searchResults, status } = state

  const searchShabad = async query => {
    try {
      if (query?.length < 1) return
      dispatch({
        type: actions.SET_STATUS,
        payload: { status: statusCodes.PENDING }
      })
      const { data, status } = await searchByQuery(query)
      if (status === 200) {
        dispatch({ type: actions.UPDATE_RESULTS, payload: { data } })
        dispatch({
          type: actions.SET_STATUS,
          payload: { status: statusCodes.SUCCESS }
        })
      } else {
        dispatch({
          type: actions.SET_STATUS,
          payload: { status: statusCodes.ERROR }
        })
        dispatch({
          type: actions.SET_ERROR,
          payload: { error: 'Something went wrong while attempting to search!' }
        })
      }
    } catch (error) {
      dispatch({
        type: actions.SET_ERROR,
        payload: { error: error.message }
      })
    }
  }

  return (
    <ApiContext.Provider value={{ searchShabad, searchResults, status }}>
      {children}
    </ApiContext.Provider>
  )
}

export const useApi = () => useContext(ApiContext)

export default ApiProvider

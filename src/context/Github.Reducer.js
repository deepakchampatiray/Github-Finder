export const GET_REPOS = 'getRepos';
export const GET_USER = 'getUser';
export const CLEAR = 'clear';
export const SEARCH_USER = 'searchUser';
export const SET_LOADING = 'setLoading';

const Github_Reducer = (state, action) => {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, repos: action.payload, loading: false };
    case GET_USER:
      return { ...state, user: action.payload, loading: false };
    case SEARCH_USER:
      return { ...state, users: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    case CLEAR:
      return { ...state, users: [] };
    default:
      return state;
  }
};

export default Github_Reducer;

import { GET_POSTS, GET_POSTS_ERR } from '../actionTypes/postsType'

const initialState = {
    posts: []
}
const postsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POSTS: {
            return {
                ...state,
                posts: payload
            }
        }

        case GET_POSTS_ERR: {
            return {
                ...state,
                posts: []
            }
        }

        default: {
            return { ...state };
        }
    }
}

export default postsReducer;
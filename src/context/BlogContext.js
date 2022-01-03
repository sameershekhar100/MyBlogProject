import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'GetBlogPost':
            return action.payload
        case 'EditBlogPost':
            return (
                state.map((blogPost) => {
                    return blogPost.id === action.payload.id
                        ? action.payload
                        : blogPost;
                }))

        case 'DeleteBlogPost':
            return state.filter((blogPost) => (blogPost.id !== action.payload))
        default:
            return state
    }
}

const getBlogPost = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts')

        dispatch({ type: 'GetBlogPost', payload: response.data })
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content })
        if (callback) {
            callback();
        }
    }
}
const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'DeleteBlogPost', payload: id })
    }
}
const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content })
        dispatch({ type: 'EditBlogPost', payload: { id, title, content } })
        if (callback) {
            callback();
        }
    }
}
// const [BlogPosts, dispatch] = useReducer(blogReducer, [])

// return (
//     <BlogContext.Provider value={{ data: BlogPosts, addBlogPost }}>
//         {children}
//     </BlogContext.Provider>
// )


export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost }, [])
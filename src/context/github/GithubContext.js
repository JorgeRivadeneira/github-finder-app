import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({children}) => {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    const[state, dispatch] = useReducer(githubReducer, initialState);
    
    //Get search results
    /*
    const searchUsers = async (text) => {
        setLoading();

        const params = new URLSearchParams({
            q: text
        });
        
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });

        const {items} = await response.json();

        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }  
    */
    
    //Get single user
    /*
    const getUser = async (login) => {
        setLoading();

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });

        if(response.status === 404){
            window.location = '/notfound'
        }else{
            const data = await response.json();
            dispatch({
                type: 'GET_USER',
                payload: data
            });
        }
    }   
    
    //Get user repos
    const getUserRepos = async (login) => {
        setLoading();

        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
        });

        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });

        const data = await response.json();
        
        dispatch({
            type: 'GET_REPOS',
            payload: data
        })
    }    */  
    
    /*const clearUsers = async () => {

        dispatch({
            type: 'CLEAR_USERS',
        })
    }    

    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    });*/

    return <GithubContext.Provider value={{
        /*users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,*/
        ...state,
        dispatch, 
    }}>
        {children}
    </GithubContext.Provider>    
}



export default GithubContext
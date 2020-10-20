export const createProjectAction = (project) => {
    return (dispatch, getState) => {
        // make async call to DB

        dispatch({
            type: 'CREATE_PROJECT',
            project
        })
    }
}
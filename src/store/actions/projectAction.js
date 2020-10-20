export const createProjectAction = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to DB

        const firestore = getFirestore()
        firestore.collection('projects').add({
            ...project,
            firstname: 'Dimitrije',
            lastname: 'jankovic',
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_PROJECT',
                project
            })
        }).catch(err => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                err
            })
        })
    }
}
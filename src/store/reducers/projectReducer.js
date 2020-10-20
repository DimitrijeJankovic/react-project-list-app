const initState = {
    projects: [
        { id: 1, title: 'Learn React', content: 'Learn React.js with Redux and Firebase', createdAt: '20/10/2020 22:53' },
        { id: 2, title: 'Learn .NET', content: 'Learn .NET for creating backend APIs', createdAt: '20/10/2020 22:54' },
        { id: 3, title: 'Connect All', content: 'Connect frontend APPs with custom APIs', createdAt: '20/10/2020 22:55' }
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer
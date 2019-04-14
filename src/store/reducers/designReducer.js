const initialState = {
    designs: [
        {id: 1, name: 'Project one', tshirtColor: 'black'},
        {id: 2, name: 'Project two', tshirtColor: 'blue'},

    ]

}

const designReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_DESIGN':
        console.log('design is saved ', action.design) 
    }
    return state
}

export default designReducer
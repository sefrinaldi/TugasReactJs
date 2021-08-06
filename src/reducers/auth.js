const defaultState = {
    statusLogin: false,
    // dataUser: [{
    //     id: 1,
    //     fullname: "sefrinaldi",
    //     username: "admin",
    //     password: "password",
    //     address: "Bukittinggi"
    // },
    // {
    //     id: 2,
    //     fullname: "user",
    //     username: "user",
    //     password: "passwordUser",
    //     address: "jakarta"
    // }]
    dataUser: []
};

const authReducer = (state = defaultState, action) => {
    
    console.log("state: ", state);
    console.log("action: ", action.payload);

    switch (action.type) {
        case "LOGIN" :
            return {
                ...state,
                statusLogin: true
            };

        case "GET_DATA" :
            return {
                ...state,
                dataUser: action.payload.newUser
            }
        
        case "REGISTER" :
            return {
                ...state,
                dataUser: [
                    ...state.dataUser, action.payload.newUser
                ]
            };

        case "LOGOUT" :
            return defaultState;
        default :
            return state;
    }
}

export default authReducer;
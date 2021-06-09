
export const setUserType = (type) => {
    return function (dispatch) {
        dispatch({ type: "save_type", payload: type });
    };
};

export default setUserType;
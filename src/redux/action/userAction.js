export const FETCH_SAVE_USER = 'FETCH_SAVE_USER';
export const FETCH_DEGREE = 'FETCH_DEGREE'
export const saveUser = (data) => {
    return {
        type: FETCH_SAVE_USER,
        payload: data
    }
}
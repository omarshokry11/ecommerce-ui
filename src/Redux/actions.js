import ecommerce from '../API/api.js';

export const fetchBanner = () => async dispatch => {
    const response = await ecommerce.get('/banner');
    dispatch({ type: "FETCH_BANNER", payload: response.data});
};
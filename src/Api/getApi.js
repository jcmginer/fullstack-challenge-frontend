

export const fetchGet = async (dispatch, route, setList) => {
    try {
        const resp = await fetch(`http://localhost:4000/api/${route}/get/`);
        const data = await resp.json();
        await dispatch(setList(data.info));
    } catch (error) {
        console.log(error);
    }
}
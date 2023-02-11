import { useEffect } from "react";

// redux
import { fetchGet } from "../../Api/getApi";
import { useDispatch } from 'react-redux';

import { setUserList, setUserLogged } from "../../redux/features/user/userSlice";
import { useAuth0 } from '@auth0/auth0-react';

export const Helper = () => {
    const dispatch = useDispatch();
    const { getAccessTokenSilently, user } = useAuth0();

    useEffect(() => {
        fetchGet(dispatch, "user", setUserList);
    }, [dispatch])

    useEffect(() => {
        if (user) {
            checkUser();
        }
    });

    const checkUser = async () => {
        const token = await getAccessTokenSilently();

        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/checkuser/${user.email}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        const responseData = await response.json()

        if (!!responseData.info[0]) {
            console.log('The user exists in the database');
            await dispatch(setUserLogged(responseData.info[0]));
        } else {
            console.log('The user does not exist in the database');
            const $user = {
                email: user.email,
                userData: {
                    username: user.nickname,
                    first_name: user.given_name,
                    last_name: user.family_name,
                    profilePicture: user.picture,
                    complete_name: user.name
                }
            }

            const request = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/createuser`, {
                method: "POST",
                body: JSON.stringify($user),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await request.json()
            await dispatch(setUserLogged(data.info));
        }
    }
}
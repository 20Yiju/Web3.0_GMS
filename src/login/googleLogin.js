import React, { useCallback, useEffect } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from 'gapi-script';


const clientId = '204219929151-k9a6tb52i579nkqcrol6jv0k0imiq57l.apps.googleusercontent.com';

const GoogleButton = ({ setUserInfo, setIsLogin }) => {
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId,
                scope: 'email',
            });
        }

        gapi.load('client:auth2', start);
    }, []);

    const onSuccess = useCallback((response) => {
        const userInfo = {
            profileImg: response.profileObj.imageUrl,
            email: response.profileObj.email,
            name: response.profileObj.name
        }
        setUserInfo(userInfo);
        setIsLogin(true);
        console.log(response.profileObj);
        // console.log(response.wt.Ad);
    }, [])

    const onFailure = (response) => {
        console.log(response);
    };

    return (
        <div>
            <GoogleLogin
             clientId={clientId}
             buttonText="구글 로그인"
             onSuccess={onSuccess}
             onFailure={onFailure}
             cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default GoogleButton;
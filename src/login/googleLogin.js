import React, { useCallback, useEffect } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from 'gapi-script';


const clientId = '204219929151-k9a6tb52i579nkqcrol6jv0k0imiq57l.apps.googleusercontent.com';

const GoogleButton = ({ onSocial }) => {
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId,
                scope: 'email',
            });
        }

        gapi.load('client:auth2', start);
    }, []);

    const onSuccess = (response) => {
        console.log(response);
    };

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
            />
        </div>
    );
};

export default GoogleButton;


// const GoogleLogIn = () => {
//         const successGoogle = (response) => {
//             console.log(response);
//         }
    
//         // 로그인 실패 시
//         const failGoogle = (response) => {
//             console.log(response);
//         }
    
//         const onLogoutSuccess = () => {
//             console.log('SUCESS LOGOUT');
//         }
    
//         return (
//             <React.Fragment>
//                 <GoogleLogIn
//                  clientId='클라이언트 ID'
//                  buttonText="로그인"
//                  onSuccess={successGoogle}
//                  onFailure={failGoogle}
//                 />
//                 <GoogleLogout
//                  clientId='클라이언트 ID'
//                  onLogoutSuccess={onLogoutSuccess}
//                 />
//             </React.Fragment>
//         )
//     }




//     const GoogleLogIn = () => {

//     return (
//         <React.Fragment>
//             <GoogleOAuthProvider clientID='204219929151-k9a6tb52i579nkqcrol6jv0k0imiq57l.apps.googleusercontent.com'>
//                 <GoogleLogin
//                     buttonText="google login"
//                     onSuccess={(credentialResponse) => {
//                         console.log(credentialResponse);
//                     }}
//                     onError={() => {
//                         console.log('Login Failed');
//                     }}
//                 />
//             </GoogleOAuthProvider>
//         </React.Fragment>
//     )
// }

// export default GoogleLogIn;
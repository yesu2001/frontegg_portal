// import "./App.css";
// import { useEffect } from "react";
// import {
//   useAuth,
//   useLoginWithRedirect,
//   AdminPortal,
//   useTenantsState,
// } from "@frontegg/react";
// import { ContextHolder, FronteggContext } from "@frontegg/rest-api";
// import { Routes, useNavigate, Route } from "react-router-dom";

// function Private() {
//   const { isAuthenticated } = useAuth();
//   const loginWithRedirect = useLoginWithRedirect();
//   // const history = useHistory();
//   const navigateTo = useNavigate();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       console.log("user is not logged-on. going to loginWithRedirect");
//       localStorage.setItem("_REDIRECT_AFTER_LOGIN_", window.location.pathname);
//       loginWithRedirect();
//     }
//   }, [isAuthenticated, loginWithRedirect]);

//   return isAuthenticated ? (
//     <div>
//       <h1>Private</h1>
//       <button onClick={() => navigateTo("/")}>Go home</button>
//     </div>
//   ) : (
//     <div />
//   );
// }

// function Home() {
//   const { user, isAuthenticated } = useAuth();
//   const tenantsState = useTenantsState();
//   const loginWithRedirect = useLoginWithRedirect();
//   // const history = useHistory();
//   const navigateTo = useNavigate();

//   console.log("user - ", user);
//   console.log("isAuthenticated - ", isAuthenticated);
//   console.log("tenants - ", tenantsState?.tenants);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       console.log("user is not logged-on. going to loginWithRedirect");
//       localStorage.setItem("_REDIRECT_AFTER_LOGIN_", window.location.pathname);
//       loginWithRedirect();
//     }
//   }, [isAuthenticated, loginWithRedirect]);

//   const logout = () => {
//     const baseUrl = ContextHolder.getContext().baseUrl;
//     window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
//   };

//   const originalRoute = localStorage.getItem("_REDIRECT_AFTER_LOGIN_");
//   console.log("originalRoute - ", originalRoute);
//   const token = FronteggContext.getAccessToken();
//   console.log("token - ", token);
//   if (isAuthenticated && originalRoute) {
//     navigateTo(originalRoute);
//     localStorage.removeItem("_REDIRECT_AFTER_LOGIN_");
//   }

//   return (
//     <div className="App">
//       {isAuthenticated ? (
//         <div>
//           <div>
//             <span>Logged in as: {user?.name}</span>
//           </div>
//           <div>
//             <button onClick={() => alert(user.accessToken)}>
//               What is my access token?
//             </button>
//           </div>
//           <div>
//             <button onClick={() => AdminPortal.show()}>
//               Open admin portal
//             </button>
//           </div>
//           <div>
//             <button onClick={() => logout()}>Click to logout</button>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <button onClick={() => loginWithRedirect()}>Click me to login</button>
//           <button onClick={() => navigateTo("/private")}>
//             Go to private route
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// function App() {
//   return (
//     <Routes>
//       <Route path="/private" component={Private} />
//       <Route path="/" Component={Home} />
//     </Routes>
//   );
// }

// export default App;

import "./App.css";
import { useEffect } from "react";
import {
  useAuth,
  useLoginWithRedirect,
  ContextHolder,
  AdminPortal,
} from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          {/* <div>
            <button onClick={() => alert(user.accessToken)}>
              What is my access token?
            </button>
          </div> */}
          <div style={{ margin: "10px 0" }}>
            <button onClick={() => AdminPortal.show()}>Settings</button>
          </div>
          <div>
            <button style={{ color: "lightpink" }} onClick={() => logout()}>
              logout
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;

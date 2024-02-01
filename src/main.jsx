import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App'
import './index.css'
import Button from './Componets/Button.jsx'
import CreateAccountStepI from './Pages/login/CreateAccountStepI'
import CreateAccountStepII from './Pages/login/CreateAccountStepII'
import CreateAccountStepIII from './Pages/login/CreateAccountStepIII'
import CreateAccountStepIV from './Pages/login/CreateAccountStepIV'
import HomeFeedIndex from './Pages/HomeFeed/HomeFeedIndex'
import UserContextProvider from './Context/UserContextProvider.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import ComposeTweet from './Pages/compose-tweet/ComposeTweet'
import UserProfile from './Pages/UserProfile/UserProfile'
import EditProfile from './Pages/UserProfile/EditProfile.jsx'
import { TweetProvider } from './Context/TweetContext.jsx'
import SignInEmail from './Pages/SignUp/SignInEmail.jsx'
import SignInPassword from './Pages/SignUp/SignInPassword.jsx'


const router = createBrowserRouter([
  {
    path: "/login",
    element: <App/>
  },

  {
    path: "/home",
    element: <HomeFeedIndex/>
  },
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/step-1",
    element: <CreateAccountStepI/>
  },
  {
    path: "/step-2",
    element: <CreateAccountStepII/>
  },
  {
    path: "/step-3",
    element: <CreateAccountStepIII/>
  },
  {
    path: "/step-4",
    element: <CreateAccountStepIV/>
  },
  {
    path: "/compose-tweet",
    element: <ComposeTweet/>
  },
  {
    path: "/UserProfile/:id",
    element: <UserProfile/>
  },
  {
    path: "/EditProfile/:id",
    element: <EditProfile/>
  },
  {
    path: "/SignInEmail",
    element: <SignInEmail/>
  },
  
  {
    path: "/SignInPassword",
    element: <SignInPassword/>
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  


    {/* <App /> */}



<TweetProvider>
<UserContextProvider>
    <RouterProvider router={router} />
   
    </UserContextProvider>
    </TweetProvider>
  </React.StrictMode>,

)

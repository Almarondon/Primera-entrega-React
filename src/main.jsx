import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBUruMGSi-dVXz3YsT-gbPJKwexXxcKpgU",
  authDomain: "curso-alma-firebase.firebaseapp.com",
  projectId: "curso-alma-firebase",
  storageBucket: "curso-alma-firebase.appspot.com",
  messagingSenderId: "656113978649",
  appId: "1:656113978649:web:90b7e82b63d1f108504988",
  measurementId: "G-9YEPSTEG0V"
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

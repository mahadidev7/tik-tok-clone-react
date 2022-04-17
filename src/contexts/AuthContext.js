import React, { useContext, useEffect, useState } from 'react'
import db from '../firebase';
import { onSnapshot,collection } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";

const AuthContexts = React.createContext()

export function useAuth(){
    return useContext(AuthContexts)
}


const AuthContext = ({children}) => {
    const [Videos, setVideos] = useState([])
    const [auth, setAuth] = useState(false)

    
  function getData(){
    const col = collection(db, "videos")
    onSnapshot(col, snapshot => {
      setVideos(snapshot.docs.map(doc => doc.data()))
    })
  }
  
  function GoogleSignIn(){
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(secc => {
        setAuth(secc)
      })
      .catch(err => {
        setAuth(false)
      })
  }

  useEffect(() => {
    getData()
    const auth = getAuth();
    const unScription = onAuthStateChanged(auth, (e)=>{
      setAuth(e)
    })
    return unScription;
  }, [])

    
  const value = {
    GoogleSignIn,
    auth,
    Videos

  }


  return (
    <AuthContexts.Provider value={value}>
        {children}
    </AuthContexts.Provider>
  )
}

export default AuthContext
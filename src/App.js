import { useEffect, useState } from "react";
import "./App.css";
import Video from "./Components/Video";
import db from "./firebase";
import { onSnapshot, collection } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Button } from "@mui/material";

function App() {
  const [Videos, setVideos] = useState([]);
  const [authCreate, setAuthCreate] = useState(false);
  const [currentUserB, setcurrentUserB] = useState(false);
console.log(currentUserB);
  function getData() {
    const col = collection(db, "videos");
    onSnapshot(col, (snapshot) => {
      setVideos(snapshot.docs.map((doc) => doc.data()));
    });
  }

  function GoogleSignIn() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((secc) => {
        setAuthCreate(secc)
        window.location.reload();
      })
      .catch((err) => {
        setAuthCreate(false);
      });
  }
  
  function GooglesignOut() {
    const auth = getAuth();
    const confirm = window.confirm("Are you sure?");
    if(confirm){
      signOut(auth)
      .then(() => {
        setAuthCreate(false);
        // window.location.reload()
      })
      .catch((error) => {
        console.log("logout Error", error.messages);
      });
    }
    
  }

  useEffect(() => {
    getData();
    const auth = getAuth();
    onAuthStateChanged(auth, (e) => {
      setAuthCreate(e)
      if(e){
        setcurrentUserB(true)
      }else{
        setcurrentUserB(false)
      }
    });
  }, []);

  return (
    <>
      <div className="App">
        <div className="app__videos">
          {Videos.map(
            ({ url, channel, description, song, likes, messages, shares }) => (
              <Video
                key={url}
                url={url}
                channel={channel}
                description={description}
                song={song}
                likes={likes}
                messages={messages}
                shares={shares}
                Cauth={currentUserB}
              />
            )
          )}

          {!authCreate && <p> loading... </p>}
        </div>
        <div className="Auth">
          <p>
            
            Create by <a href="https://github.com/mahadidev7" target="_blank"> @mahadidev7
            </a>
          </p>
        </div>
      </div>


      <div className="logInDiv">
        {!authCreate && (
            <Button onClick={GoogleSignIn}> Log in With Google </Button>
        )}
        {authCreate && (
          <div>
            <img src={authCreate.photoURL} alt="dfs" />
            <h4> {authCreate && authCreate.email} </h4>
            <span> {authCreate && authCreate.displayName} </span>
            <Button onClick={GooglesignOut}> Log Out </Button>
          </div>
        )}
      </div>
      
    </>
  );
}

export default App;
//53.29
//2.14.25

import { auth } from "../config/firebase-config";
import {
  createUserWithEmailAndPassword,
  reload,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState();

  const signIn = async () => {
    try {
      setMsg("");
      await createUserWithEmailAndPassword(auth, email, password);
      reload(auth);
      window.location.reload(true);
    } catch (err) {
      console.log(err);
      setMsg(err.message);
    }
  };

  const logout = async () => {
    try {
      setMsg("");
      await signOut(auth);
      window.location.reload(true);
    } catch (err) {
      setMsg(err.message);
    }
  };

  useEffect(() => {
    return () => {
      console.log("calling auth");
    };
  }, []);

  const styles = {
    container: {
      width: '300px',
      margin: '50px auto',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    loggedInBox: {
      textAlign: 'center',
    },
    input: {
      padding: '10px',
      fontSize: '14px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px',
      backgroundColor: '#007BFF',
      border: 'none',
      color: '#fff',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
    },
    error: {
      color: 'red',
      marginTop: '10px',
      fontSize: '13px',
      textAlign: 'center',
    },
    text: {
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      {auth?.currentUser ? (
        <div style={styles.loggedInBox}>
          <p style={styles.text}>
            Signed in as: <strong>{auth.currentUser.email}</strong>
          </p>
          <button style={styles.button} onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div style={styles.form}>
          <input
            style={styles.input}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={styles.input}
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button style={styles.button} onClick={signIn}>
            Sign In
          </button>
        </div>
      )}
      {msg && <p style={styles.error}>{msg}</p>}
    </div>
  );
  
};

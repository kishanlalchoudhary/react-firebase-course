import React, { useState } from "react";
import { auth, goggleProvider } from "../config/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);
  console.log(auth?.currentUser?.photoURL);

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, goggleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        placeholder="Email..."
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={signUp}>SignUp</button>
      <button onClick={signInWithGoogle}>SignIn With Google</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

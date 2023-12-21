import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

async function enterAccount(email, password) {
  try {
    // Try to sign up
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Signed up:", userCredential.user);
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      // If user exists, try to log in
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("Logged in:", userCredential.user);
      } catch (loginError) {
        console.error("Login error:", loginError);
      }
    } else {
      console.error("Signup error:", error);
    }
  }
}

export default enterAccount;

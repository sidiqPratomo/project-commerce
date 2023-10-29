import React from "react";
import Signup from "../component/SignUp";
import AuthForm from "../component/AuthForm";
import { auth } from "../firebase";
import { json, redirect } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function AuthenticationPage() {
  return (
    <>
      <AuthForm />
      <Signup />
    </>
  );
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode" }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  try {
    let userCredential;
    if (mode === "login") {
      userCredential = await signInWithEmailAndPassword(auth, authData.email, authData.password);
    } else {
      userCredential = await createUserWithEmailAndPassword(auth, authData.email, authData.password);
    }

    const user = userCredential.user;
    console.log("data user =>" + user);
    if (mode === "login") {
      console.log("login success");
    } else {
      console.log("sign up success");
    }
    return redirect("/");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    // Handle errors as needed.
  }
}

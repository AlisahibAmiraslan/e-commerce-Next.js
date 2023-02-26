import React, { useState } from "react";
import Link from "next/link";
import { auth } from "../config/Config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        router.push("/");
      })
      .catch((err) => {
        if (err.code == "auth/email-already-in-use") {
          setErrorMsg(`email already in use`);
        }
      });
  };

  return (
    <section className="w-full md:max-w-7xl mx-auto lg:pl-0 pl-10">
      <main className="py-14">
        <h1 className="text-4xl pb-5">Sign Up</h1>
        <div>
          <div className="container">
            <form autoComplete="off" onSubmit={signup}>
              <div>
                <input
                  type="text"
                  className="border border-black"
                  placeholder="name"
                  required
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, name: event.target.value }))
                  }
                />
              </div>
              <div className="pt-5">
                <input
                  type="email"
                  className="border border-black"
                  placeholder="email"
                  required
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                />
              </div>

              <div className="py-5">
                <input
                  type="password"
                  className="border border-black"
                  placeholder="email"
                  required
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, pass: event.target.value }))
                  }
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white px-10 py-2 text-base"
              >
                SIGN UP
              </button>
            </form>
            <br />
            {errorMsg && (
              <span className="error-msg text-red-500">{errorMsg}</span>
            )}
            <br />
            <br />
            <span>
              Do You have already an account? Login
              <Link href="/login">
                <a className="underline">Here</a>
              </Link>
            </span>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Signup;

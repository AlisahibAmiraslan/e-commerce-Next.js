import React, { useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Config";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        router.push("/");
      })
      .catch((err) => {
        if (err.code == "auth/user-not-found") {
          setErrorMsg("wrong email or password");
        }
      });
  };

  return (
    <section className="w-full md:max-w-7xl mx-auto lg:pl-0 pl-10">
      <main className="py-14">
        <h1 className="text-4xl pb-5">Login</h1>
        <div>
          <div className="container">
            <form autoComplete="off" onSubmit={handleSubmission}>
              <div>
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
                LOGIN
              </button>
            </form>
            <br />
            {errorMsg && (
              <span className="error-msg text-red-600">{errorMsg}</span>
            )}
            <br />
            <br />
            <span>
              Don't have an account? Register
              <Link href="/signup">
                <a className="underline">Here</a>
              </Link>
            </span>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;

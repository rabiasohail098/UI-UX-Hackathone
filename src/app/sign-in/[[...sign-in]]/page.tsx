
import React from "react";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs"

const SignUp = () => {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [error, setError] = useState("")
  // console.log(name,email,password)

  // // Handle Form Submit
  // const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!name || !email || !password) {
  //     setError("All fields are necessary")
  //     return; 
  //   }
  //   try {
  //     const response = await fetch('/api/users/signup', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ 
  //         name,
  //         email,
  //         password
  //        }),
  //     });
  //     if (response.ok) {
  //       const form = e.target as HTMLFormElement;
  //       form.reset();
  //     } else {
  //       console.log("user registration failed")
  //     }

  //   // Show the response from API
  //   } catch (error) {
  //     console.error('Error during registration:', error);
  //   }
  // };

  return (
    <>
      {/* Header Section */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Sign In Page</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            › Sign Up
          </p>
        </div>
      </section>

      {/* Form Section */}
      <div className="max-w-[1920px]">
        <div className="flex flex-col items-center justify-center mx-auto max-w-[1200px] px-4 md:px-8 lg:px-12 py-10 gap-6 rounded-lg">
        
        <SignIn/>
           
           
           
            
              

        
        </div>
      </div>
    </>
  );
};

export default SignUp;

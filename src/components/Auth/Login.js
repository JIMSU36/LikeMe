import React, { useContext, useEffect } from "react";
import { Input, Button, Label, Form, FormGroup } from "reactstrap";
import AuthContext from "../../Contexts/AuthContext";


const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const handleSubmit = e => {
      e.preventDefault();
      const username = e.target.username.value;
      const password = e.target.password.value;
      username.length > 0 && loginUser(username, password);
    };

    return(
        <>
        <div id="1" name="1" className='content'>
            <div className='h-[1px] bg-transparent'></div>
        </div>
        <div id="5" name="5" className='content'>
            <div className='banner h-[40vh]  w-full relative bg-gray-400'>
                <div className='h-auto w-full absolute top-[50%] translate-y-1/2'>
                    <Label className='label-shadow w-full h-full m-auto text-center text-4xl text-white font-bold'>관리자 로그인</Label>
                </div>
            </div>
            <div className='w-full py-20 bg-white'>
                <div className="">
                    <Label className="font-bold text-4xl">Admin Login</Label>
                    <Form 
                        className="md:w-[20vw] w-[80vw] h-full m-auto my-12"
                        onSubmit={handleSubmit}
                    >
                        <div className="my-4">
                            <Input
                                className="!bg-transparent border-b w-full p-4 focus:outline-none"
                                type="text" 
                                id="username" 
                                placeholder="Username"
                            />
                        </div>
                        <div className="my-4">
                            <Input
                                className="!bg-transparent border-b w-full p-4 focus:outline-none"
                                type="password" 
                                id="password" 
                                placeholder="Password"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="bg-[#93AEF9] w-full rounded-lg p-4 my-4 font-bold text-white hover:bg-[#758BC7]"
                        >
                            Login
                        </Button>
                    </Form>
                </div>
                
                {/* <section>
                    <form onSubmit={handleSubmit}>
                        <h1>Login </h1>
                        <hr />
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Enter Username" />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" />
                        <button type="submit">Login</button>
                    </form>
                </section> */}
            </div>
        </div>
        
        </>
    )
}

export default Login
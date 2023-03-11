import Link from "next/link"
import test from "node:test"

const Login:React.FC = () => {
    return(
        <div>
            <div className="caret-transparent w-[50%] flex flex-col justify-center 
            font-serif font-medium text-[#0063db] w-4/5">
                <div className="flex justify-center m-10">
                    <img src="/logo.png" alt="Logo" className="w-1/2"/>
                </div>
                <div className="flex justify-center text-2xl ">LOG IN</div>
                <div className="flex justify-center flex-col text-1xl">
                    <label htmlFor="uname">Username</label>
                    <input type="text" name="uname" className="m-5 text-[#000000] outline outline-1 
                    outline-[#0063db] rounded-full outline-offset-4 px-2"></input>
                    <label htmlFor="pass">Password</label>
                    <input type="text" name="pass" className="m-5 text-[#000000] outline outline-1 
                    outline-[#0063db] rounded-full outline-offset-4 px-2"></input>
                    <div className="my-2">No account yet? &nbsp;
                        <Link href="/section/signup">
                            <span className="underline cursor-pointer">Click Here</span>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center my-2">
                <Link href="/section/homepage">
                    <button className="bg-[#0063db] text-white w-1/5  rounded-full">LOG IN</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
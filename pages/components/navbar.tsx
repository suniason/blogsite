import Link from "next/link"

const Navbar:React.FC = () => {
    return(
        <div>
            
            <Link href="/"><div>index</div></Link>
            <Link href="/section/login"><div>login</div></Link>
            <Link href="/section/signup"><div>signup</div></Link>
            <Link href="/section/userprofile">profile<div></div></Link>
            <Link href="/section/homepage"><div>homepage</div></Link>
            <Link href="/section/createblog"><div>create</div></Link>
            <Link href="/section/blogdetails"><div>details</div></Link>
            <Link href="/section/adminpage"><div>admin</div></Link>
        </div>
    )
}

export default Navbar
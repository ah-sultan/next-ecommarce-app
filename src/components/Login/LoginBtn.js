import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"

function LoginBtn() {
    const [showProfile, setShowProfile] = useState(false)
    const { data: session } = useSession()


    if (session) {

        return (
            <>
                <div className="relative">
                    <button onClick={() => setShowProfile(!showProfile)} className="w-8 h-8 rounded-full border overflow-hidden border-blue-900">
                        <Image src={session.user.image} alt={session.user.name} />
                    </button>

                    <div className="absolute top-full right-0 p-2 rounded-md bg-slate-900 shadow" style={{ display: showProfile ? 'block' : 'none' }}>
                        <div className="flex items-center border-b pb-2">
                            <div className="w-12 h-12 rounded-full border overflow-hidden border-blue-900 mr-2">
                                <Image src={session.user.image} alt={session.user.name} />
                            </div>
                            <div>
                                <h6 className="leading-none">{session.user.name}</h6>
                                <span className="text-xs leading-none">{session.user.email}</span>
                            </div>
                        </div>
                        <button className="pl-1 text-blue-500 mt-2.5" onClick={() => signOut()}>Sign out</button>


                    </div>
                </div>


            </>
        )
    }

    return (
        <>
            <button className="pl-1 text-blue-500" onClick={() => signIn()}>Sign in</button>
        </>
    )
}

export default LoginBtn
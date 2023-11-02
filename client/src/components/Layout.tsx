import { PropsWithChildren } from "react";

export default function Layout({children}:PropsWithChildren) {

    return (
        <main className="overflow-y-auto min-h-screen p-5 bg-white">

            <div className="font-bold text-xl pb-2.5">_Technology Roster</div>
            
            {children}

            <div className="mt-10 mb-2.5">Technology descriptions by <a href="https://wikipedia.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">wikipedia</a></div>
        </main>
    )
}
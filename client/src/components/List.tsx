import { Technology, ComponentProps } from "@/tools/data.model";
import Link from 'next/link';

export function List({ technologies }:ComponentProps) {

    return(
        <div className="flex flex-wrap">
            <div className="flex flex-col flex-nowrap pr-5">
                <div className="py-4">Click the technology name below to find out what courses require it:</div>

                    {technologies.map((technology:Technology, n:number) => 
                        <div key={n} className="ml-8 pl-2.5 py-0.5 border-l-4 border-solid border-accent">
                            <Link 
                                href={`/tech/${technology._id}`} 
                                className="text-accent font-bold hover:underline">
                                {technology.name}
                            </Link>
                        </div>
                    )}

            </div>
        </div>
    );
}
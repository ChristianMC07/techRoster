import { getTechnologies } from '@/tools/DataManager';
import Link from 'next/link';
import { Technology, Course } from '@/tools/data.model';

export default function Tech({ technology }:{ technology:Technology }) {
    // ---------------------------------- render to the DOM
    return(
        <div className="pt-2">
            <div className="font-bold">
                <Link href="/"><i className="fas fa-arrow-left pr-2 text-xl hover:text-accent"></i></Link>
                Details for {technology?.name}
            </div>
            <div className="max-w-3xl pb-4">{technology?.description}</div>

            <div className="pb-1">Difficulty:</div>
            <div className="pb-2">
                {technology != undefined ?
                    <>
                        <i className={`fas fa-square pr-0.5 ${(technology.difficulty >= 1) ? "text-accent" : "text-greyed-out"}`}></i>
                        <i className={`fas fa-square pr-0.5 ${(technology.difficulty >= 2) ? "text-accent" : "text-greyed-out"}`}></i>
                        <i className={`fas fa-square pr-0.5 ${(technology.difficulty >= 3) ? "text-accent" : "text-greyed-out"}`}></i>
                        <i className={`fas fa-square pr-0.5 ${(technology.difficulty >= 4) ? "text-accent" : "text-greyed-out"}`}></i>
                        <i className={`fas fa-square pr-0.5 ${(technology.difficulty >= 5) ? "text-accent" : "text-greyed-out"}`}></i>
                    </>
                    : 
                    <></>
                }
            </div>

            <div className="py-2">Required in courses:</div>
            {technology?.courses.map((course:Course, n:number) => 
                <div key={n} className="ml-8 pl-2.5 py-2 border-l-4 border-solid border-accent">
                    <div className="font-bold">{course.code} {course.name}</div>
                </div>
            )}
        </div>
    );
}

// Dynamic Routing with SSG
export async function getStaticPaths() {
    const technologies:Technology[] = await getTechnologies();

    // get the paths we want to pre-render based on data
    const paths = technologies.map((technology:Technology) => ({
        params: { id: technology._id }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({params}:{params:{id:string}}) {
    const technologies:Technology[] = await getTechnologies();
    let technology:(Technology | undefined) = technologies.find(item => item._id === params.id);
    return {
      props: {
        technology: technology
      }
    }
}
import { getTechnologies } from '@/tools/DataManager';
import { ComponentProps } from '@/tools/data.model';
import { List } from "@/components/List";

export default function Home({ technologies }:ComponentProps) {

  return (
    <>
      {technologies.length > 0 ?
			  <List technologies={technologies} />
      :
        <>There are currently no technologies in the database :(</>
      }
		</>
  )
}

export async function getStaticProps() {
  return {
    props: {
      technologies: await getTechnologies()
    }
  }
}
import { getChaptersId, getChapterJSX } from "../lib/chapters";

export async function getStaticPaths() {
    const paths = getChaptersId();
   
    return {
      paths,
      fallback: false
    }
  }

export async function getStaticProps({params}){
    const chapterContent = getChapterJSX(params.chapter);

    return {
      props: {
        chapterContent
      }
    }
}

  export default function Chapter({chapterContent}){
 
      return (
        <article dangerouslySetInnerHTML={{__html: chapterContent.fileContents}}></article>
      )
  }
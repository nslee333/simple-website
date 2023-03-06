import Home from "./Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";


function App({images, member}) {
  return (
    <>
      <div className="app">
        <Header>
          <h1>BendJS</h1>
        </Header>

        <main>
            <Home images={images} member={member}/>
        </main>

        <Footer />
      </div>
    </>
  );
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-03-05',
  useCdn: false
});

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export async function getStaticProps() {
  const images = await client.fetch(`*[_type == "ImageGallery"]{
    image1, 
    image2, 
    image3, 
    image4, 
    image5, 
    image6
  }`);
  const member = await client.fetch(`*[_type == 'MemberSpotlight']`);
  
  return {
    props: {
      images,
      member
    }
  }
}

export default App;
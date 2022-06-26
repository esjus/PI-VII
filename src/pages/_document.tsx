import {Html, Head, Main,NextScript} from 'next/document'
import {Footer} from '../components/ui/footer/Footer'
import VLibras from "@djpfs/react-vlibras";


export default function Document(){
    return(
        <Html>
            <Head>

            </Head>
            <body>
                <VLibras/>
               
                
                <Main/>
                <NextScript/>
                
                <Footer/>
            </body>

        </Html>
    )
}
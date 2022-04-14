import CollectionStatus from './components/CollectionStatus'
// import Crowd from './components/Crowd'
import Minting from './components/Minting'
import Navbar from './components/Navbar'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import angelsBg from './assets/bg.png'
import SocialsMobile from './components/SocialsMobile'
function App() {
    return (
        <div className="relative">
            <ToastContainer />
            <div className='min-h-screen font-raleway flex justify-center align-items-center z-1 ' style={{position:'absolute', top:0, left:0, width:'100%'}}>
            <div className="flex justify-center items-center">
                    <div className="max-w-3xl text-center container__connect" style={{ background:'rgba(255, 255, 255, 0.65)', backdropFilter:'blur(5px)', borderRadius:16}}>
                        <CollectionStatus />

                        <div className="mt-8">
                            <Minting />
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen font-raleway z-2" id='particle' style={{backgroundImage:`url(${angelsBg})`, backgroundPosition: 'right', backgroundSize:'cover'}}>
                <div className="p-9">
                    <Navbar />
                </div>
                {/* <Crowd /> */}
                <SocialsMobile/>
            </div>

        </div>
    )
}


export default App

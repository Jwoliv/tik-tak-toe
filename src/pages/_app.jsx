import { Inter } from 'next/font/google'
import '../styles/global.css'

const inter = Inter({ subsets: ['latin'] })

const App = ({ Component, pageProps }) => {
    return (
        <div className={inter.className}>
            <Component {...pageProps} />
            <div id="modals-context"></div>
        </div>
    )
}

export default App

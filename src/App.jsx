import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import PredictionContextProvider from './context/PredictionContext.jsx'

const App = () => {
  return (
    <PredictionContextProvider>
      <div className='min-h-screen bg-slate-900 text-white w-screen grid grid-rows-[70px_1fr_70px] gap-10 md:text-lg lg:text-xl'>
        <Header />
        <Main />
        <Footer />
      </div>
    </PredictionContextProvider>
  )
}

export default App

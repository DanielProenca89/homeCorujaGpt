import Header from '../components/header'
import FirstSection from '../components/first'
import SecondSection from '../components/second'
import ThirdSection from '../components/third'
import styles from '../styles/Home.module.css'
import FourtSection from '../components/fouth'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourtSection/>


          </div>
  )
}

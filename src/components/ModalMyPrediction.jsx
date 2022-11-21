import html2canvas from 'html2canvas'
import { useRef } from 'react'
import Button from '../Containers/Button'
import Section from '../Containers/Section'
import EightsResults from './EightsResults'
import FinalResults from './FinalResults'
import FourthsResults from './FourthsResults'
import GroupResults from './GroupResults'
import Modal from './Modal'
import SemifinalResults from './SemifinalResults'
import ThirdPositionResults from './ThirdPositionResults'

const ModalMyPrediction = ({ ...props }) => {
  const prediction = useRef(null)

  const donwloadPrediction = async () => {
    const node = prediction.current
    const canvas = await html2canvas(node, {
      useCORS: true
    }).then(canvas => canvas)
    const imgUrl = canvas.toDataURL('image/jpeg', 1.0)
    const download = document.createElement('a')
    download.href = imgUrl
    download.setAttribute('download', 'My-prediction')
    download.click()
  }

  return (
    <Modal {...props}>
      <div ref={prediction}>
        <Section>
          <GroupResults />
          <EightsResults />
          <FourthsResults />
          <SemifinalResults />
          <ThirdPositionResults />
          <FinalResults />
        </Section>
      </div>
      <div className='flex justify-end'>
        <Button onClick={donwloadPrediction}>Download</Button>
      </div>
    </Modal>
  )
}

export default ModalMyPrediction

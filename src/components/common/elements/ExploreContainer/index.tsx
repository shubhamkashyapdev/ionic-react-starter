import { IonButton } from '@ionic/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

import { DialogBox } from '@/components/common'

interface ContainerProps {
  name: string
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="grid place-content-center py-10"
    >
      <div className="rounded-md p-4 text-center shadow-lg">
        <strong className="text-indigo-500 underline">{name}</strong>
        <p>
          Explore
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/components"
          >
            UI Components
          </a>
        </p>
        <IonButton fill="outline" onClick={openModal}>
          <span>Open Dialog</span>
        </IonButton>
      </div>
      <DialogBox closeModal={closeModal} isOpen={isOpen} />
    </motion.div>
  )
}

export default ExploreContainer

import { Dialog, Switch, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { IonButton } from "@ionic/react";
import { useState, Fragment } from "react";
import { DialogBox } from "..";
interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  console.log(isOpen);
  return (
    <motion.div initial={{x: -200}} animate={{x: 0}} transition={{duration: 1}} className="grid place-content-center py-10">
      <div className="p-4 rounded-md shadow-lg text-center">
        <strong className="text-indigo-500 underline">{name}</strong>
        <p>
          Explore{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/components"
          >
            UI Components
          </a>
        </p>
        <IonButton onClick={openModal}>Open Dialog</IonButton>
      </div>
      <DialogBox closeModal={closeModal} isOpen={isOpen} />
    </motion.div>
  );
};

export default ExploreContainer;

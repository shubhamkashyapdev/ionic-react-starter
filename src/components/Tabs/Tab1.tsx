import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { ExploreContainer } from 'src/components/common'

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Resume</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Resume</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Resume" />
      </IonContent>
    </IonPage>
  )
}

export default Tab1

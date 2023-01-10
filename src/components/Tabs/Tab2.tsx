import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { ExploreContainer } from 'src/components/common'

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Templates</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Templates</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Templates" />
      </IonContent>
    </IonPage>
  )
}

export default Tab2

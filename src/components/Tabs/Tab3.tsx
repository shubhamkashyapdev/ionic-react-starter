import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { ExploreContainer } from 'src/components/common'

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Analytics</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Analytics</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Analytics" />
      </IonContent>
    </IonPage>
  )
}

export default Tab3

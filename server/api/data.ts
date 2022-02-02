import { getFirestore } from 'firebase-admin/firestore'
import { initializeApp, getApps, applicationDefault } from 'firebase-admin/app'

const apps = getApps()


if (!apps.length) {
    initializeApp({
        credential: applicationDefault(),
        databaseURL: 'https://your_project_id.firebaseio.com'
    });
}

export default async (request, response) => {
    const db = getFirestore()
    const dataSnap = await db.collection('collectionName').get()
    const fireData = dataSnap.docs.map(doc => {
        return {
            uuid: doc.id,
            ...doc.data()
        }
    })
    
    return fireData
}
import fstore from './firebase'
import { collection, getDocs } from 'firebase/firestore'

export default async function getPin () {
  const querySnapshot = await getDocs(collection(fstore, 'pin'))
  const pins = []
  querySnapshot.forEach(doc => {
    pins.push(doc.data())
  })
  return pins
}

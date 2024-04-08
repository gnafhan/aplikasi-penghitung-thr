import fstore from './firebase'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'

export default async function getDataTHR () {
  const querySnapshot = await getDocs(collection(fstore, 'dataThr'))
  const thrs = []
  querySnapshot.forEach(doc => {
    thrs.push({ ...doc.data(), id: doc.id })
  })
  return thrs
}

const postDataTHR = async (name, thr, keterangan) => {
  if (!name || !thr) {
    throw new Error('Name and THR are required')
  }

  const add = await addDoc(collection(fstore, 'dataThr'), {
    name,
    thr,
    keterangan
  })

  return add
}

const deleteDataTHR = async id => {
  if (!id) {
    throw new Error('ID is required')
  }

  const deletedDoc = await deleteDoc(doc(fstore, 'dataThr', id))

  return deletedDoc
}

export { postDataTHR, deleteDataTHR }

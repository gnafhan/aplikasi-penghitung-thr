import fstore from './firebase'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'

export default async function getDataTHR () {
  const querySnapshot = await getDocs(collection(fstore, 'cash_flow'))
  const thrs = []
  querySnapshot.forEach(doc => {
    console.log(doc._document.createTime.timestamp.seconds)
    thrs.push({ ...doc.data(), id: doc.id, created_at: doc._document.createTime.timestamp.seconds })
  })
  return thrs
}

const postDataTHR = async (nama, nominal, keterangan, kategori) => {
  if (!nama || !nominal || !kategori) {
    throw new Error('Name, kategori, and THR are required')
  }

  const add = await addDoc(collection(fstore, 'cash_flow'), {
    nama,
    nominal,
    keterangan,
    kategori
  })

  return add
}

const deleteDataTHR = async id => {
  if (!id) {
    throw new Error('ID is required')
  }

  const deletedDoc = await deleteDoc(doc(fstore, 'cash_flow', id))

  return deletedDoc
}

export { postDataTHR, deleteDataTHR }

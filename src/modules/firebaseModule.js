import { getStorage,ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { getFirestore, collection, addDoc,getDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { firebaseApp } from '../firebaseApp';


export const addFile = async (col, data) => {
    try {
        const db = getFirestore(firebaseApp)
        const paintRef = await addDoc(collection(db,col), data);
        return {status:200, paintRef}
    }
    catch(err){

        return {status:403, err}
    }
}
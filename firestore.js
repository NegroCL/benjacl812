// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"
import { addDoc, collection, deleteDoc, doc, getDoc, getFirestore, onSnapshot, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBXSVNft_iq8NAvbLKHzz7YqSlzAW4T3MY",
  authDomain: "benjacl8.firebaseapp.com",
  projectId: "benjacl8",
  storageBucket: "benjacl8.appspot.com",
  messagingSenderId: "46908801706",
  appId: "1:46908801706:web:2d0217611d95e401ff06d3",
  measurementId: "G-J846681R8F"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const save = (IngresarDatosClan) => {
    addDoc(collection(db, 'Ingresar Datos Clan'), IngresarDatosClan)
}

export const getData = (data) => {
    onSnapshot(collection(db, 'Ingresar Datos Clan'), data)
}

export const remove = (id) => {
    deleteDoc(doc(db, 'Ingresar Datos Clan', id))
}

export const getDocumento = (id) => getDoc(doc(db, 'Ingresar Datos Clan', id))

export const update = (id,emp) =>{
    updateDoc(doc(db,'Ingresar Datos Clan',id),emp)
}
import app from 'firebase/app'
import firebaseConfig from './config/config'
import 'firebase/auth'
import 'firebase/firebase-database'
import 'firebase/firestore'

class Firebase {
  constructor() {
    if (Firebase.instance) return Firebase.instance

    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
    this.db = app.database()
    this.firestore = app.firestore()
    Firebase.instance = this
  }

  async getCurrentUser(callback) {
    this.auth.onAuthStateChanged(callback)
  }

  async login(email, password) {
    const data = await this.auth.signInWithEmailAndPassword(email, password)

    return data
  }

  async logout() {
    await this.auth.signOut()
  }

  addFirebaseRT(path, data) {
    return this.db.ref(path).push(data)
  }

  removeFirebaseRT(path, id) {
    return this.db.ref(path).child(id).remove()
  }

  updateFirebaseRT(path, { key, data }) {
    return this.db.ref(path).child(key).update(data)
  }
}

const firebase = new Firebase()
export default firebase

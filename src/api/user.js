import * as firebase from 'firebase'
export default {
    addUser() {
        return firebase.auth().createUserWithEmailAndPassword(this.state.username,this.state.password);
    }
}

import { db } from "../firebase";

const listVideoApi = {
    getUser: (video) => {
        try {
            let result = []
            const docRef = db.doc(`members/${video}`)
            docRef.get().then(function (doc) {
                if (doc && doc.exists) {
                    result.push(doc.data())
                }
            })
            return result
        } catch (e) {
            console.log(e);
        }
    },
    getAll: () => {
        try {
            let result = []
            db.collection("members")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        result.push(doc.data());
                    });
                });
            return result
        } catch (e) {
            console.log(e);
        }
    }

}

export default listVideoApi
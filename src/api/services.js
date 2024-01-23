import { getDocs, getDoc, getFirestore, collection, where, query } from 'firebase/firestore'

export const fetchProducts = async (categoryId) => {
    const db = getFirestore();
    const conditionProducts = where('categoryId', '==', categoryId)
    const collectionProducts = collection(db, 'items');
    const queryProducts = query(collectionProducts, conditionProducts)

    const snapshot = await getDocs(queryProducts);

    return snapshot.docs.map((doc) => {
        const data = {
            id: doc.id,
            ...doc.data()
        };

        return {
            ...data,
            imageSrc: `${window.location.origin}/${data.imageSrc}`
        }
    });
}

export const fetchProductById = async (id) => {
    const products =  await getDoc(id)
    return products;
}
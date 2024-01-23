import { getDocs, getDoc, getFirestore, collection, where, query, doc } from 'firebase/firestore'

export const fetchProducts = async (categoryId) => {
    const db = getFirestore();
    
    const conditionProducts = where('categoryId', '==', categoryId || '')
    const collectionProducts = collection(db, 'items');
    const queryProducts = query(collectionProducts, conditionProducts)

    const paramsSnapshot = categoryId === undefined 
        ? collectionProducts 
        : queryProducts 

    const snapshot = await getDocs(paramsSnapshot);

    const data = snapshot.docs.map((doc) => {
        const data = {
            id: doc.id,
            ...doc.data()
        };

        return {
            ...data,
            imageSrc: `${window.location.origin}/${data.imageSrc}`
        }
    });

    console.log(data, categoryId);

    return data;
}

export const fetchProductById = async (id) => {
    const db = getFirestore();
    const productRef = doc(db, 'items', id);
    const snapshot =  await getDoc(productRef)

    const data = {
        id: snapshot.id,
        ...snapshot.data()
    };

    return {
        ...data,
        imageSrc: `${window.location.origin}/${data.imageSrc}`
    };
}
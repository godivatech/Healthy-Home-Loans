import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, getDocs, doc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Helper function to submit contact form data
export const submitContactForm = async (data: any) => {
    try {
        const docRef = await addDoc(collection(db, "websites", "healthy-home-loans", "contact-submissions"), {
            ...data,
            timestamp: serverTimestamp(),
            source: 'contact_page'
        });
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Error adding document: ", error);
        return { success: false, error };
    }
};

// Helper function to submit lead capture data
export const submitLeadCapture = async (data: any) => {
    try {
        const docRef = await addDoc(collection(db, "websites", "healthy-home-loans", "loan-leads"), {
            ...data,
            timestamp: serverTimestamp(),
            source: 'lead_capture_modal'
        });
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Error adding document: ", error);
        return { success: false, error };
    }
};

// --- ADMIN FETCH FUNCTIONS ---

export const getContactSubmissions = async () => {
    try {
        const q = query(
            collection(db, "websites", "healthy-home-loans", "contact-submissions"),
            orderBy("timestamp", "desc")
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error fetching contact submissions:", error);
        return [];
    }
};

export const getLoanLeads = async () => {
    try {
        const q = query(
            collection(db, "websites", "healthy-home-loans", "loan-leads"),
            orderBy("timestamp", "desc")
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error fetching loan leads:", error);
        return [];
    }
};

export const deleteContactSubmission = async (id: string) => {
    try {
        await deleteDoc(doc(db, "websites", "healthy-home-loans", "contact-submissions", id));
        return { success: true };
    } catch (error) {
        console.error("Error deleting contact submission:", error);
        return { success: false, error };
    }
};

export const deleteLoanLead = async (id: string) => {
    try {
        await deleteDoc(doc(db, "websites", "healthy-home-loans", "loan-leads", id));
        return { success: true };
    } catch (error) {
        console.error("Error deleting loan lead:", error);
        return { success: false, error };
    }
};

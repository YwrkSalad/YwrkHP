import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";

function getFirebaseApp() {
  if (getApps().length > 0) return getApp();

  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON!);

  return initializeApp({
    credential: cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

export function getDb() {
  return getDatabase(getFirebaseApp());
}

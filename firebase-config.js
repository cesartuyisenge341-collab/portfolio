export const firebaseConfig = {
  apiKey: "AIzaSyDCDpEf-KrFKIf1AT4e_uqxG8iDyl6GpeE",
  authDomain: "portfolio-a57fa.firebaseapp.com",
  projectId: "portfolio-a57fa",
  storageBucket: "portfolio-a57fa.firebasestorage.app",
  messagingSenderId: "86864277469",
  appId: "1:86864277469:web:32f30842813c026e2c1034",
  measurementId: "G-PH45LKR1MJ"
};

export const isFirebaseConfigured = Object.values(firebaseConfig).every(function (value) {
  return value && !value.startsWith("YOUR_");
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { firebaseConfig, isFirebaseConfigured } from "./firebase-config.js";

const form = document.getElementById("contactForm");
if (form) {
  const feedback = document.getElementById("formFeedback");
  const submit = form.querySelector('[type="submit"]');
  const originalButton = submit.innerHTML;
  const database = isFirebaseConfigured
    ? getFirestore(initializeApp(firebaseConfig))
    : null;

  function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.classList.remove("success", "error");
    feedback.classList.add(type);
    feedback.style.display = "block";
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    feedback.style.display = "none";

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const subject = form.elements.subject.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      showFeedback("Please fill in your name, a valid email, and message.", "error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFeedback("Please enter a valid email address.", "error");
      return;
    }
    if (!database) {
      showFeedback("The contact form is not connected yet. Please email me directly.", "error");
      console.error("Firebase is not configured. Update firebase-config.js with your web app settings.");
      return;
    }

    submit.disabled = true;
    submit.innerHTML = '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Sending…';

    try {
      await addDoc(collection(database, "contactMessages"), {
        name: name,
        email: email,
        subject: subject,
        message: message,
        submittedAt: serverTimestamp()
      });
      form.reset();
      showFeedback("Message sent! I’ll get back to you soon.", "success");
    } catch (error) {
      console.error("Unable to submit contact form to Firebase.", error);
      showFeedback("Your message could not be sent. Please try again or email me directly.", "error");
    } finally {
      submit.disabled = false;
      submit.innerHTML = originalButton;
    }
  });
}

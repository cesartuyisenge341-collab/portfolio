import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { firebaseConfig, isFirebaseConfigured } from "./firebase-config.js";

const form = document.getElementById("contactForm");
if (form) {
  const feedback = document.getElementById("formFeedback");
  const submit = form.querySelector('[type="submit"]');
  let feedbackMessage = "";
  let isSending = false;
  const database = isFirebaseConfigured
    ? getFirestore(initializeApp(firebaseConfig))
    : null;

  function translate(message) {
    return typeof window.portfolioTranslate === "function"
      ? window.portfolioTranslate(message)
      : message;
  }

  function buttonMarkup(message, loading) {
    const icon = loading ? "fa-spinner fa-spin" : "fa-paper-plane";
    return '<i class="fa-solid ' + icon + '" aria-hidden="true"></i> ' + translate(message);
  }

  function showFeedback(message, type) {
    feedbackMessage = message;
    feedback.textContent = translate(message);
    feedback.classList.remove("success", "error");
    feedback.classList.add(type);
    feedback.style.display = "block";
  }

  window.addEventListener("portfolio-language-change", function () {
    if (feedbackMessage) feedback.textContent = translate(feedbackMessage);
    submit.innerHTML = buttonMarkup(isSending ? "Sending…" : "Send message", isSending);
  });

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
    isSending = true;
    submit.innerHTML = buttonMarkup("Sending…", true);

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
      isSending = false;
      submit.disabled = false;
      submit.innerHTML = buttonMarkup("Send message", false);
    }
  });
}

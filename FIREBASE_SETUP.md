# Firebase contact form setup

The portfolio is a static site. The contact form stores submissions in the
Cloud Firestore `contactMessages` collection; it does not send email or expose
submitted messages on the public site.

## Connect your Firebase project

1. In the Firebase console, create or select a project and add a **Web app**.
2. Create a **Cloud Firestore** database in production mode.
3. Copy the web app configuration into `firebase-config.js`, replacing each
   `YOUR_...` placeholder with the matching value from Firebase project settings.
   The web app config is intended to be public; never put service-account keys
   or other private credentials in this static site.
4. Deploy the database rules from the repository root with the Firebase CLI:

   ```powershell
   firebase login
   firebase deploy --only firestore:rules --project YOUR_PROJECT_ID
   ```

5. Deploy the updated static site using the same hosting provider as the
   existing portfolio, then submit a test message and verify it appears in the
   Firebase console under Firestore Database → `contactMessages`.

The rules allow only new, bounded contact submissions. Public reads, updates,
and deletes are denied. Because the form is public, monitor usage and billing;
for stronger abuse protection, enable Firebase App Check for Firestore and
consider a server-side submission endpoint with rate limiting.

Each document has this shape:

```text
contactMessages/{autoId}
  name: string        (1–100 characters)
  email: string       (valid-looking address, max 254 characters)
  subject: string     (0–150 characters)
  message: string     (1–5000 characters)
  submittedAt: timestamp
```

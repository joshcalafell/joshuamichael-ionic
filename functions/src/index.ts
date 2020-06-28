import { https } from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = https.onRequest((_request, _response) => {
 _response.send("Hire me 💡");
});

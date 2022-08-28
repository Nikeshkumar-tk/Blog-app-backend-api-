// Import the functions you need from the SDKs you need
 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration initial
// const firebaseConfig = {
//   apiKey: "AIzaSyAelN1cPn7NX18AmSv4OYE2sHmKv6XHZKA",
//   authDomain: "miniproject-598ee.firebaseapp.com",
//   projectId: "miniproject-598ee",
//   storageBucket: "miniproject-598ee.appspot.com",
//   messagingSenderId: "142627219962",
//   appId: "1:142627219962:web:9be9f1eddb051e34f95c43"
// };

// // Initialize Firebase
//  const firebase = initializeApp(firebaseConfig);
//  const storage=firebase.storage().ref();

//  const addImage = async (req, res) => {
//     try {
//         // Grab the file
//         const file = req.file;
//         // Format the filename
//         const timestamp = Date.now();
//         const name = file.originalname.split(".")[0];
//         const type = file.originalname.split(".")[1];
//         const fileName = `${name}_${timestamp}.${type}`;
//          // Step 1. Create reference for file name in cloud storage 
//         const imageRef = storage.child(fileName);
//         // Step 2. Upload the file in the bucket storage
//         const snapshot = await imageRef.put(file.buffer);
//         // Step 3. Grab the public url
//         const downloadURL = await snapshot.ref.getDownloadURL();
        
//         res.send(downloadURL);
//      }  catch (error) {
//         console.log (error)
//         res.status(400).send(error.message);
//     }
// }
// module.exports=addImage
// // We are using the useEffect Hook to load the note when our component first loads. We then save it to the state. We get the id of our note from the URL using the props automatically passed to us by React-Router in props.match.params.id. The keyword id is a part of the pattern matching in our route (/notes/:id).

// If there is an attachment, we use the key to get a secure link to the file we uploaded to S3. We then store this in the new note object as note.attachmentURL.

// The reason why we have the note object in the state along with the content and the attachmentURL is because we will be using this later when the user edits the note.
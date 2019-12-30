/**
 * The user selects a file to upload.
The file is uploaded to S3 under the user’s folder and we get a key back.

Create a note with the file key as the attachment.
We are going to use the Storage module that AWS Amplify has. If you recall, that back in the Create a Cognito identity pool chapter we allow a logged in user access to a folder inside our S3 Bucket. 

AWS Amplify stores directly to this folder if we want to privately store a file.
 */
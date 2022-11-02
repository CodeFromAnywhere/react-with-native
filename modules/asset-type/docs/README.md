Support different UX's for file uploading

- Audio recording (to mp3)
- Camera (to png)
- Video recording (to mp4)
- Audio upload in multiple formats (with conversion to mp3)
- Image upload in multiple formats (with conversion to png)
- File upload of any other file for download (pdf, docx, xlsx, csv, etc.)
- An alt text should always be able to be provided.
- A thumbnail should always be generated and stored in the same place.
- Uploading multiple files at once should be possible
- Choosing an already existing media from within King OS

Nice to have:

- Files can upload while the form is still loading, so this should be a separate endpoint
- Form should invalidate if the upload is still in progress
- Upload can be canceled or deleted after upload

# CDN

A connected CDN would be nice as well to save bandwidth and increase performance.

# Cleanup

A cleanup strategy would be great. If a model is deleted, all referenced assets should also be deleted if they are not referenced anymore. Also, when saving a `md`-file the assets that aren't referenced anymore should be removed (or moved to the global `/assets` folder). This way it is kept clean.

# conclusion

All in all, this would be a feasible way to store stuff on any SaaS product. It is quite interconnected to other things like `fs-orm`, but this is a nice Micro-SaaS in itself!

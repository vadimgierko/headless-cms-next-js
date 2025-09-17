# TODO

## Ad. 1. Git-based CMS & Content Types TODO

1. The ultimate goal is to shift managing content (and website data overall)
   - from dev-oriented (by hardcoding & literally typing content in the code)
   - to user-oriented (even if the user is the dev) (managing content via forms in dev mode (for now!) or in production, if the CMS will be deployed as Node.js app on hosting server or VPS).
2. The content still will be stored locally, but
   - instead of `.ts` files containing js objects managed by hand
   - => `.json` (for metadata, db-like structures etc.) & `.md` (for rich-text & large content) files managed automatically in response to user actions performed via form.
   - \+ ❗❗❗ REMEMBER TO ALSO ENABLE MANAGING IMAGES, OTHER FILES & EMBEDED MEDIA (OR EVEN LOCALLY SAVED FILES)❗❗❗
   - \+ ❗❗❗ REMEMBER TO NOT RELY ON `FieldName` (&`ItemsType`), because they will be custom names made by user❗❗❗
3. After building
   - `inside-app` CMS
   - build a `standalone` CMS
     - `for myself` at the beginning (as a central hub for all of my static websites, which will be switched to consume content via `API`,
     - then build a standarized/abstract version of the app, which could be forked on gh `for other users`

- enable adding website & all it's metadata
- enable adding tags to all content
  - collect tags as separate collection shared for all content & websites
- add created/updatedAt timestamp for all
- use special repo vadimgierko for content in /web-development & fetch all dev data from gh, choosing only what projects to show
- field => category with name given by the user => remove type FieldName & do not use that in logic
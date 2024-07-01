import { createRouteHandler } from 'uploadthing/next';
import { fileRouter } from '~/server/filesUploader';

export const { GET, POST } = createRouteHandler({
  router: fileRouter,
});

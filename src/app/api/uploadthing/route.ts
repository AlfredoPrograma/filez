import { createRouteHandler } from 'uploadthing/next';
import { fileRouter } from '~/server/files-uploader';

export const { GET, POST } = createRouteHandler({
  router: fileRouter,
});

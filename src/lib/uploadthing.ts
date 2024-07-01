import { generateReactHelpers } from '@uploadthing/react';
import { type FilesRouter } from '~/server/filesUploader';

export const { uploadFiles, useUploadThing } =
  generateReactHelpers<FilesRouter>();

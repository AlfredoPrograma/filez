import { generateReactHelpers } from '@uploadthing/react';
import { type FilesRouter } from '~/server/files-uploader';

export const { uploadFiles, useUploadThing } =
  generateReactHelpers<FilesRouter>();

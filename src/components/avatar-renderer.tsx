import { type ImageUploaderRendererProps } from './forms/image-uploader-field';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { CircleUserRoundIcon } from 'lucide-react';

type AvatarRendererProps = ImageUploaderRendererProps;

export function AvatarRenderer({
  openFileSelector,
  previewSrc,
}: AvatarRendererProps) {
  return (
    <div className='flex justify-center'>
      <Avatar
        onClick={openFileSelector}
        className='h-24 w-24'
      >
        <AvatarImage src={previewSrc} />
        <AvatarFallback className=' bg-white'>
          <CircleUserRoundIcon className='relative z-10 h-24 w-24' />
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

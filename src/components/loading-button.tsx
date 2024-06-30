import { type ReactNode, type ComponentProps } from 'react';
import { Button } from './ui/button';
import { LoaderCircleIcon } from 'lucide-react';

type LoadingButtonProps = {
  isLoading: boolean;
  children: ReactNode;
} & ComponentProps<typeof Button>;

export function LoadingButton({
  isLoading,
  children,
  ...buttonProps
}: LoadingButtonProps) {
  return (
    <Button
      disabled={isLoading || buttonProps.disabled}
      {...buttonProps}
    >
      {isLoading ? <LoaderCircleIcon className='h-5 w-5' /> : children}
    </Button>
  );
}

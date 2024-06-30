'use client';

import {
  type PathValue,
  useFormContext,
  type FieldValues,
  type Path,
} from 'react-hook-form';
import { FormField } from '../ui/form';
import { Input } from '../ui/input';
import { type ChangeEvent, useRef, useState, type ReactNode } from 'react';

export type ImageUploaderRendererProps = {
  openFileSelector: () => void;
  previewSrc: string;
};

type ImageUploaderFieldProps<T extends FieldValues = FieldValues> = {
  name: Path<T>;
  avatarRenderer: (props: ImageUploaderRendererProps) => ReactNode;
};

export function ImageUploaderField<T extends FieldValues = FieldValues>({
  name,
  avatarRenderer,
}: ImageUploaderFieldProps<T>) {
  const [previewSrc, setPreviewSrc] = useState('');
  const form = useFormContext<T>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function openFileSelector() {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  }

  const { ref: fieldRef, ...field } = form.register(name, {
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (!files || files.length === 0) return;

      const imageFile = files[0]!;
      const previewUrl = URL.createObjectURL(imageFile);

      form.setValue(name, imageFile as PathValue<T, Path<T>>);
      setPreviewSrc(previewUrl);
    },
  });

  return (
    <FormField
      name={name}
      render={() => (
        <>
          {avatarRenderer({ openFileSelector, previewSrc })}

          <Input
            {...field}
            className='hidden'
            type='file'
            ref={(element) => {
              fieldRef(element);
              fileInputRef.current = element;
            }}
          />
        </>
      )}
    />
  );
}

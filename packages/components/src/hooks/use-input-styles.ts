import { css } from '@emotion/core';
import { useTheme } from 'sajari-react-sdk-styles';
import tw, { TwStyle } from 'twin.macro';

export interface UseInputStyleProps {
  checked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  indeterminate?: boolean;
  block?: boolean;
  type: 'text' | 'select' | 'radio' | 'checkbox';
}

export default function useInputStyles(props: UseInputStyleProps) {
  const { block, checked, disabled, indeterminate, invalid, readOnly, type } = props;
  const theme = useTheme();
  const styles: (TwStyle | string)[] = [];

  styles.push(
    tw`px-3 py-2 pl-10 text-base leading-normal text-gray-700 bg-white border border-gray-200 border-solid outline-none`,
  );

  if (block) {
    styles.push(tw`block w-full`);
  }

  if (disabled || readOnly) {
    styles.push(tw`cursor-not-allowed`);
  }

  if (disabled) {
    styles.push(tw`text-gray-400 bg-gray-100 border-gray-200 focus:border-gray-200 focus:shadow-none`);

    if (['radio', 'checkbox'].includes(type)) {
      styles.push(tw`checked:bg-gray-400 checked:border-gray-400`);
    }
  }

  if (invalid) {
    styles.push(tw`border-red-500 focus:border-red-500 focus:shadow-outline-red`);

    if (['radio', 'checkbox'].includes(type)) {
      styles.push(tw`bg-red-100 checked:bg-red-500`);
    }
  }

  if (['radio', 'checkbox'].includes(type)) {
    styles.push(tw`flex-none w-4 h-4 p-0 m-0 text-blue-500`);
  } else {
    styles.push(tw`transition-shadow duration-200 ease-in-out`);
  }

  if (type === 'checkbox') {
    // styles.push(tw`rounded`);
    styles.push(
      `&:checked {
        background-image: url("data:image/svg+xml,%3Csvg fill='white' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m6.9919558 12.0005941c-.26547704 0-.52006014-.1054507-.7077524-.293l-2.00319264-2.00000003c-.37937552-.39237889-.37394992-1.01608478.01219439-1.40181858.3861443-.38573379 1.01051394-.39115363 1.40331041-.01218142l1.20234127 1.2 3.30864357-5.107c.3394637-.43630494.9687248-.51510281 1.4054941-.17599998.4367692.33910283.515651.96769503.1761873 1.40399998l-4.00638527 6.00000003c-.1761023.2273124-.44160568.3679379-.72877475.386z'/%3E%3C/svg%3E");
      `,
    );
  }

  if (type === 'checkbox' && indeterminate) {
    styles.push(tw`border-transparent`);
    styles.push(`background-color: ${theme.color.primary.base};`);
  }

  if (type === 'select') {
    styles.push(tw`px-10 py-2 pl-3 rounded-md`);
  }

  if (type === 'text') {
    styles.push(tw`rounded-full`);
  }

  return css(styles);
}

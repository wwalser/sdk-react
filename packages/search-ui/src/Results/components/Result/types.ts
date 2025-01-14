import { BoxProps } from '@sajari/react-components';
import { Token } from '@sajari/react-hooks';
import * as React from 'react';

import { UseClickTrackingParams } from '../../../hooks';
import { ResultsProps, ResultValues } from '../../types';

interface Props extends Pick<ResultsProps, 'appearance' | 'imageAspectRatio' | 'imageObjectFit'>, BoxProps {
  /** Search result values */
  values: ResultValues;
  /** The token used for tracking/analytics */
  token?: Token;
  /** Handle clicking a result */
  onClick?: UseClickTrackingParams['onClick'];
  /** Display image or not */
  showImage?: boolean;
  /** Force an image placeholder */
  forceImage?: boolean;
  /** The classname for heading */
  headingClassName?: string;
  /** The classname for price */
  priceClassName?: string;
  /** The classname for original price */
  originalPriceClassName?: string;
  /** The classname for sub-title */
  subTitleClassName?: string;
  /** The classname for rating */
  ratingClassName?: string;
  /** The classname for description */
  descriptionClassName?: string;
}

type HTMLAttributes = Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;

export interface ResultProps extends Props, HTMLAttributes {}

import { isEqual } from "lodash-es";
// @ts-ignore: module missing defintion file
import memoize from "memoize-one";
import * as React from "react";
// @ts-ignore: module missing defintions file
import ReactSelect from "react-select";

import { Filter, IOptions } from "../../controllers/filter";
import {
  FilterConsumer,
  FilterProvider,
  IFilterContext
} from "../context/filter";
import { styles as defaultStyles } from "./styled";

export interface ISelectProps {
  filter: Filter;
}

export const Select: React.SFC<ISelectProps> = ({ filter }) => (
  <FilterProvider filter={filter}>
    <FilterConsumer>
      {({ options, selected, set }) => {
        return (
          <ReactSelect
            styles={defaultStyles}
            isClearable={true}
            options={mapOptions(options)}
            onChange={handleChange(selected, set)}
          />
        );
      }}
    </FilterConsumer>
  </FilterProvider>
);

const mapOptions = memoize(
  (options: IOptions) =>
    Object.entries(options).map(([label, value]) => ({
      label,
      value
    })),
  isEqual
);

const handleChange = (
  selected: string[],
  set: (name: string, value: boolean) => void
) => (value: any, { action }: any) => {
  switch (action) {
    case "select-option":
      set(value.label, true);
      break;
    case "pop-value":
      set(selected[0], false);
      break;
    case "clear":
      selected.forEach(option => {
        set(option, false);
      });
      break;

    default:
      break;
  }
};
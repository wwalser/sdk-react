import * as React from "react";

import { Consumer } from "../../context";
import { trimPrefix } from "../../utils";
import { Container } from "./styled";

export type TypeaheadMode = "typeahead" | "suggestions";

export interface TypeaheadProps {
  mode: TypeaheadMode;
  highlightedIndex: number;
  inputValue: string;
  completion: string;
  suggestions: string[];
  styles?: any;
}

export const Typeahead: React.SFC<TypeaheadProps> = ({
  mode,
  highlightedIndex,
  inputValue,
  completion,
  suggestions,
  styles = {}
}) => {
  return (
    <Container styles={styles}>
      {getTypeaheadValue(
        mode,
        completion,
        suggestions,
        highlightedIndex,
        inputValue
      )}
    </Container>
  );
};

const getTypeaheadValue = (
  mode: TypeaheadMode,
  completion: string,
  suggestions: string[],
  index: number,
  value: string
) => {
  const suggestion =
    mode === "suggestions" ? suggestions[index - 1] || "" : completion;
  return trimPrefix(suggestion, value);
};

export default ({ mode, styles }: { mode: TypeaheadMode; styles?: any }) => (
  <Consumer>
    {({ completion, suggestions, highlightedIndex, inputValue }) => (
      <Typeahead
        mode={mode}
        inputValue={inputValue}
        highlightedIndex={highlightedIndex}
        completion={completion}
        suggestions={suggestions}
        styles={styles}
      />
    )}
  </Consumer>
);

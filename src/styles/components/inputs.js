import styled from "styled-components";
import { css } from "styled-components";

export const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 0px;

  align-self: start;

  color: var(--color-grey-0);
`;

export const StyledInput = styled.input`
  padding: 0px 16px;

  width: 100%;
  max-width: 330px;
  height: 48px;

  background-color: var(--color-grey-2);

  border: 1px solid var(--color-grey-2);
  border-radius: var(--radius-2);

  color: var(--color-grey-0);

  ::placeholder {
    color: var(--color-grey-1);
  }

  :focus {
    border-color: var(--color-grey-0);
  }

  ${({ color }) => {
    if (color) {
      return css`
        border: 1px solid var(--color-negative);
        :focus {
          border-color: var(--color-negative);
        }
      `;
    }
  }}
`;

export const StyledSelect = styled.select`
  padding: 0px 16px;

  width: 100%;
  max-width: 330px;
  height: 48px;

  background-color: var(--color-grey-2);

  border: 1px solid var(--color-grey-2);
  border-radius: 4px;

  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;
  color: var(--color-grey-1);

  :focus {
    border-color: var(--color-grey-0);
  }

  ${({ color }) => {
    if (color) {
      return css`
        border: 1px solid var(--color-negative);
        :focus {
          border-color: var(--color-negative);
        }
      `;
    }
  }}
`;

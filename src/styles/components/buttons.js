import styled from "styled-components";
import { css } from "styled-components";

export const StyledButton = styled.button`
  ${({ size }) => {
    switch (size) {
      case "default":
        return css`
          height: 48px;

          padding: 0px 22px;

          font-weight: 500;
          font-size: 1rem;
          line-height: 1.625rem;
        `;
      case "medium":
        return css`
          height: 32px;

          padding: 0px 26px;

          font-weight: 600;
          font-size: 0.75rem;
          line-height: 1.75rem;
        `;
    }
  }};

  border-radius: var(--radius-2);

  color: var(--color-grey-0);

  ${({ color }) => {
    switch (color) {
      case "primary":
        return css`
          background-color: var(--color-primary);

          &:hover {
            background-color: var(--color-primary-focus);
          }
        `;
      case "primaryNegative":
        return css`
          background-color: var(--color-primary-negative);
        `;
      case "disabledOne":
        return css`
          background-color: var(--color-grey-1);

          &:hover {
            background-color: var(--color-grey-2);
          }
        `;
      case "disabledTwo":
        return css`
          background-color: var(--color-grey-3);

          &:hover {
            background-color: var(--color-grey-2);
          }
        `;
    }
  }};
`;

import styled from "styled-components";

export const Title1 = styled.h2`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: var(--color-${({ color }) => color});
`;
export const Title2 = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.625rem;
  color: var(--color-${({ color }) => color});
`;
export const Title3 = styled.h4`
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--color-${({ color }) => color});
`;

export const Headline = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.375rem;
  color: var(--color-${({ color }) => color});
`;
export const HeadlineBold = styled.p`
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: var(--color-${({ color }) => color});
`;
export const HeadlineItalic = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: var(--color-${({ color }) => color});
`;

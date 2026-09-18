import styled from '@emotion/styled'

export const Card = styled.div`
  width: 235px;
  transition-property: box-shadow;
  transition-duration: 0.3s;

  &:hover {
    cursor: pointer;
  }

  .card-body {
    background-color: var(--terra-surface-muted);
  }
`

export const DropdownButton = styled.span`
  color: var(--terra-ink-muted);
  :hover {
    color: var(--terra-ink);
  }
`

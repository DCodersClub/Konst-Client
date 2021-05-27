import styled from "styled-components";

const GroupField = styled.div`
  display: flex;
  align-items: center;

  & > * {
    flex: 1;
    & + * {
      margin-left: 0.5rem;
    }
  }
`;

export default GroupField;

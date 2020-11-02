import React from "react";
import styled from "styled-components";

interface CategoryProp {
  name: string;
  type: string;
  notes: string;
}

interface Props {
  propList: [CategoryProp];
  colOneTitle?: string;
  colTwoTitle?: string;
  colThreeTitle?: string;
}

/**
 * Prop table for displaying available props for a category.
 * @param propList {object} list of props in category
 * @param colOneTitle {string} custom column one title
 * @param colTwoTitle {string} custom column two title
 * @param colThreeTitle {string} custom column three title
 */
const PropTable = ({
  propList,
  colOneTitle,
  colTwoTitle,
  colThreeTitle,
}: Props) => {
  return (
    <Container>
      <Table>
        <Header>
          <th>{colOneTitle || "Prop"}</th>
          <th>{colTwoTitle || "Type"}</th>
          <th>{colThreeTitle || "Notes"}</th>
        </Header>

        {propList.map((prop: any) => (
          <tr>
            <td>{prop.name}</td>
            <td>{prop.type}</td>
            <td>{prop.notes}</td>
          </tr>
        ))}
      </Table>
    </Container>
  );
};

const Container = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
`;

const Table = styled.table`
  background-color: ${({ theme }) => theme.colors.lightGray};
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  overflow: hidden;
  border-radius: 8px;
  text-align: center;

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.backgroundAccent};
  }

  th {
    text-transform: uppercase;
  }

  th,
  td {
    padding: 10px;
  }
`;

const Header = styled.tr`
  background-color: ${({ theme }) => theme.colors.green};
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.darkGray};
`;

export default PropTable;

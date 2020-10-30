import React from "react";
import styled from "styled-components";
import { Flex } from "shakti";

interface ICategoryProp {
  name: string;
  type: string;
  notes: string;
}

interface IProps {
  propList: [ICategoryProp];
}

/**
 * Prop table for displaying available props for a category.
 * @param propList {object} list of props in category
 */
const PropTable = ({ propList }: IProps) => {
  return (
    <Table>
      <Header>
        <th>Prop</th>
        <th>Type</th>
        <th>Notes</th>
      </Header>

      {propList.map((prop: any) => (
        <tr>
          <td>{prop.name}</td>
          <td>{prop.type}</td>
          <td>{prop.notes}</td>
        </tr>
      ))}
    </Table>
  );
};

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

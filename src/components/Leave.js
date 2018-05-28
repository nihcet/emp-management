import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Button, Icon, Table, Menu, Select } from 'semantic-ui-react';

const months = [
  { key: 0, value: 0, text: 'All' },
  { key: 1, value: 1, text: 'January' },
  { key: 2, value: 2, text: 'Fabuary' },
  { key: 3, value: 3, text: 'March' },
  { key: 4, value: 4, text: 'April' },
  { key: 5, value: 5, text: 'May' },
  { key: 6, value: 6, text: 'June' },
  { key: 7, value: 7, text: 'July' },
  { key: 8, value: 8, text: 'August' },
  { key: 9, value: 9, text: 'September' },
  { key: 10, value: 10, text: 'October' },
  { key: 11, value: 11, text: 'Novemver' },
  { key: 12, value: 12, text: 'December' },
];

const years = [{ key: 0, value: 0, text: 'All' }];
for (let y = 2018; y <= 2118; y += 1) {
  years.push({ key: y, value: y, text: y });
}

const Leave = ({ leaves, onAddClick }) => (
  <Segment.Group raised>
    <Segment>
      <Select label="Year" placeholder="Year" options={years} />
      <Select label="Month" placeholder="Month" options={months} />
      <Button icon floated="right" onClick={onAddClick}>
        <Icon name="add" />
      </Button>
    </Segment>
    <Segment>
      <Table fixed striped selectable celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Leave type</Table.HeaderCell>
            <Table.HeaderCell>From</Table.HeaderCell>
            <Table.HeaderCell>To</Table.HeaderCell>
            <Table.HeaderCell>Purpose</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {leaves.map(leave => (
            <Table.Row key={leave.id} style={{ cursor: 'pointer' }}>
              <Table.Cell>{leave.leaveType}</Table.Cell>
              <Table.Cell>{leave.leaveFrom}</Table.Cell>
              <Table.Cell>{leave.leaveTo}</Table.Cell>
              <Table.Cell>{leave.purpose}</Table.Cell>
              <Table.Cell>{leave.total}</Table.Cell>
              <Table.Cell>{leave.status}</Table.Cell>
              <Table.Cell>Cancel</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  </Segment.Group>
);

Leave.propTypes = {
  leaves: PropTypes.array.isRequired,
  onAddClick: PropTypes.func.isRequired
};

export default Leave;
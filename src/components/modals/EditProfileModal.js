import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Icon, Button } from 'semantic-ui-react';

const EditProfileModal = ({ header, children }) => (
  <Modal
    dimmer="blurring"
    size="small"
    closeIcon
    trigger={<Icon
      name="edit"
      link
      style={{ float: 'right' }}
    />}
  >
    <Modal.Header>
      {header}
    </Modal.Header>
    <Modal.Content>
      {children}
    </Modal.Content>
    <Modal.Actions>
      <Button color="blue">
        Save
      </Button>
    </Modal.Actions>
  </Modal>
);

EditProfileModal.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default EditProfileModal;

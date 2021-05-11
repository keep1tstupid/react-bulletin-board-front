import React from 'react';
import { Table, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import EditUser from "./modals/users/EditUser";
import DeleteUser from "./modals/users/DeleteUser";

const UserList = (props) => {
  const users = props.users || [];

  return (
    <div>
      <Container className={'mt-3 pl-0 pr-0'}>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th width='20%'>Username</th>
              <th width='20%'>Role</th>
              <th width='30%'>Email</th>
              <th width='30%'></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => {
              return (
                <tr key={idx}>
                  <td> {user.username} </td>
                  <td> {user.role} </td>
                  <td> {user.email} </td>
                  <td>
                    <EditUser userId={user.id} /> {' '}
                    <DeleteUser userId={user.id} />
                  </td>
                </tr>
              )}
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default connect(
  state => {
    return { users: state.users.usersData }
  }, {}
)(UserList)


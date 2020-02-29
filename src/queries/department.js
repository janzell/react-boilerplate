import { gql } from 'apollo-boost';

const fields = `
      key: id
      code
      name
      created_at
      updated_at
`;

/**
 * Create new department
 * Variable Value sample:
 * {
    "departments": [{
      "name": "Information",
      "code": "INFO"
    }]
  }
 *
 */
export const CREATE_DEPARTMENT = gql`
    mutation CreateDepartment($departments: [departments_insert_input!]!) {
        insert_departments(objects: $departments) {
            returning {
                ${fields}
            }
        }
    }
`;

export const GET_DEPARTMENTS = gql`
    query GetDepartments {
        departments(order_by: {name: asc}) {
            ${fields}
        }
    }
`;

export const UPDATE_DEPARTMENT = gql`
    mutation UpdateDepartment($id: Int!, $input:departments_set_input) {
        update_departments(
            where: {id: {_eq: $id}},
            _set: $input) {
            returning{
                ${fields}
            }
        }
    }
`;

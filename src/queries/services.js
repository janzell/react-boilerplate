import { gql } from 'apollo-boost';

const fields = `
      key: id
      code
      name
      price
      description
      department_id
      created_at
      updated_at
`;

/**
 * Create new service
 * Variable Value sample:
 * {
    "departments": [{
      "name": "Service Name",
      "code": "Code"
    }]
  }
 *
 */
export const CREATE_SERVICE = gql`
    mutation CreateService($services: [services_and_pricing_insert_input!]!) {
        insert_services_and_pricing(objects: $services) {
            returning {
                ${fields}
            }
        }
    }
`;

export const GET_SERVICES = gql`
    query GetServices {
        services_and_pricing(order_by: {name: asc}) {
            ${fields}
            department{
                id
                name
            }
        }
    }
`;

export const UPDATE_SERVICE = gql`
    mutation UpdateService($id: Int!, $input:services_and_pricing_set_input) {
        update_services_and_pricing(
            where: {id: {_eq: $id}},
            _set: $input) {
            returning{
                ${fields}
            }
        }
    }
`;

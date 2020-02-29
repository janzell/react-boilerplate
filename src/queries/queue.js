import { gql } from 'apollo-boost';

export const QUEUES_TOTAL = gql`
  query QueuesTotal {
    queue_patients_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export const QUEUE_LIST = gql`
  query QueueList($offset: Int, $limit: Int) {
    queue_patients(offset: $offset, limit: $limit) {
      queue_number
      id
      created_at
      patient_id
      status
      patient_type_id
      queue_services {
        service_and_pricing {
          name
          code
        }
      }
      patient_type: patientTypeByPatientType {
        id
        code
        name
      }
    }
  }
`;

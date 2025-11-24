import { Client } from '~backend/client';
import { getBackendURL } from './config';

const backend = new Client(getBackendURL(), { 
  requestInit: { credentials: "include" } 
});

export default backend;

export interface Detail {
  errorcode: string;
}

export interface Fault {
  faultstring: string;
  detail: Detail;
}

export interface FaultResponse {
  fault: Fault;
}

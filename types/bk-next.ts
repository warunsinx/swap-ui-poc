export type BKNextAuthRes = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string[];
  token_type: string;
};

export type BKNextABI = {
  readable_abi: string;
  required_approval: boolean;
};

export type BKNextContractList = {
  contract: {
    contract_address: string;
    network: string;
  }[];
};

export type BKNextContractDetail = {
  contract_address: string;
  contract_abi: BKNextABI[];
  network: string;
  required_approval: boolean;
};

export type BKNextTXResponse = {
  abi: string;
  confirmations: number;
  contract_address: string;
  created_time: string;
  error_message: string;
  input: [];
  network: string;
  queue_id: string;
  status: string;
  tx: string;
};

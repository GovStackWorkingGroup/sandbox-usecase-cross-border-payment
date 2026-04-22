import { TransactionsBatchRoadmapView } from "@/features/transactions/components/transactions-batch-roadmap-view";

export const paths = {
  auth: {
    login: {
      path: '/auth/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },
  app: {
    root: {
      path: '/',
      getHref: () => '/',
    },
    dashboard: {
      path: '',
      getHref: () => '/',
    },
    transactions : {
      path: 'transactions',
      getHref: () => '/transactions',
    },
    transaction : {
      path: 'transaction/:payeeIdentity',
      getHref: (payeeIdentity: string) => `/transaction/${payeeIdentity}`,
    },
    transactionsRoadmap: {
      path: "transaction-roadmap",
      element:'/transaction-roadmap' ,
    },
    transactionsInitiated: {
      path: "transactions-initiated",
      getHref: () => '/transactions-initiated',
    },
     transactionInitiated : {
      path: 'transactionInitiated/:payeeIdentity',
      getHref: (payeeIdentity: string) => `/transactionInitiated/${payeeIdentity}`,
    },
    TransactionsBatchRoadmapView: {
      path: "transactions-batch-roadmap",
      getHref: () => '/transactions-batch-roadmap',
    },
    batch: {
      path: 'batch',
      getHref: () => '/batch',
    },
  },
} as const;

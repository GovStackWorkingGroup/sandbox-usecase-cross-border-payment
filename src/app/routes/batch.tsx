import React from 'react';

import { ContentLayout } from '@/components/layouts';
import { BatchSubmitForm } from '@/features/batch/components/batch-submit-form';

export const BatchRoute = () => {
  return (
    <ContentLayout title="Submit Batch">
      <BatchSubmitForm />
    </ContentLayout>
  );
};

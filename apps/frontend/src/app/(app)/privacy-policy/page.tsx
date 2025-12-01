export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
import { PrivacyPolicy } from '@gitroom/frontend/components/legal/privacy.policy.component';

export const metadata: Metadata = {
  title: `${
    isGeneralServerSide() ? 'Postiz Privacy Policy' : 'Gitroom Privacy Policy'
  }`,
  description: '',
};

export default async function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}




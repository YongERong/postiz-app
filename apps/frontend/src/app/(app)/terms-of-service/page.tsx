export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
import { TermsOfService } from '@gitroom/frontend/components/legal/terms.of.service.component';

export const metadata: Metadata = {
  title: `${
    isGeneralServerSide() ? 'Postiz Terms of Service' : 'Gitroom Terms of Service'
  }`,
  description: '',
};

export default async function TermsOfServicePage() {
  return <TermsOfService />;
}




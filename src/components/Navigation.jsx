import Image from 'next/image';
import { useEffect, useState, useContext } from 'react';

import { NearContext } from '@/context';
import NearLogo from '/public/near-logo.svg';

export const Navigation = () => {
  const { signedAccountId, wallet } = useContext(NearContext);
  const [action, setAction] = useState(() => { });
  const [label, setLabel] = useState('Loading...');

  useEffect(() => {
    if (!wallet) return;

    if (signedAccountId) {
      setAction(() => wallet.signOut);
      setLabel(`Logout ${signedAccountId}`);
    } else {
      setAction(() => wallet.signIn);
      setLabel('Login');
    }
  }, [signedAccountId, wallet]);

  return (
    <nav>
      <Image priority src={NearLogo} alt="NEAR" width="30" height="24" />
      <button onClick={action}> {label} </button>
    </nav>
  );
};
import {
  useEffect
} from 'react';
import Router from 'next/router';
import Save from "./LoadingData/save"

export const useWarnIfUnsavedChanges = (unsavedChanges: boolean, user) => {
  const message = 'Estamos salvando suas alterações! Clique em OK para sair!';

  useEffect(() => {
    const routeChangeStart = url => {
      if (user && unsavedChanges) {
        Save(user, false)
      }
    };

    const beforeunload = e => {
      if (user) {
        Save(user, true)
        e.preventDefault();
        e.returnValue = message;
        return message;
      }
    };

    window.addEventListener('beforeunload', beforeunload);
    Router.events.on('routeChangeStart', routeChangeStart);

    return () => {
      window.removeEventListener('beforeunload', beforeunload);
      Router.events.off('routeChangeStart', routeChangeStart);

    };
  }, [unsavedChanges]);
};
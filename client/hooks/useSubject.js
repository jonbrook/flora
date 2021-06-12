import { useEffect, useState } from 'react';

// custom hook to link state to a behaviour subject
// it is read-only, the subject will be modified by other means

export const useSubject = (subject$) => {
  const [value, setValue] = useState(subject$.value);

  useEffect(() => {
    const subscription = subject$.subscribe(setValue);
    return () => subscription.unsubscribe();
  }, [subject$]);

  return [value, subject$.next];
};

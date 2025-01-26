'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/supabase';
import { logout } from '@/utils/actions';
import Button from '@/components/Button';

export default function ProfilePage() {
  const supabase = createClient();
  const [showSetupButton, setShowSetupButton] = useState(false);

  useEffect(() => {
    async function checkUserProfile() {
      const {
        data: { user },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        error,
      } = await supabase.auth.getUser();

      if (user) {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) {
          console.warn('Error querying users table:', error.message);
          setShowSetupButton(true); // Show the setup button if no entry is found or query failed
        } else if (data) {
          setShowSetupButton(false); // Hide the setup button if entry exists
        } else {
          setShowSetupButton(true); // Show the setup button if no data was found
        }
      }
    }

    checkUserProfile();
  }, [supabase]);

  return (
    <div className="flex grow flex-col">
      <h1 className="text-cream">Profile</h1>
      <div className="flex flex-col space-y-4">
        {showSetupButton && <Button>Set up profile</Button>}
        <Button onClick={logout}>Log out</Button>
      </div>
    </div>
  );
}

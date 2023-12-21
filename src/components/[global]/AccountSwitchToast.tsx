import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface AccountSwitchToastProps {
  alert: boolean;
  handleClose: () => void;
  accountType: string;
}

const AccountSwitchToast: React.FC<AccountSwitchToastProps> = ({ alert, handleClose, accountType }) => {
  return (
    <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Signed in as {accountType}
      </Alert>
    </Snackbar>
  )
}

export default AccountSwitchToast
import React from 'react';
import {
  EmailSubscribe,
  EmailTextInput,
  SubmitButton,
} from '@mui-treasury/components/EmailSubscribe';
import { useMinimalEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/minimal';
import FormLabel from '@material-ui/core/FormLabel';
import Send from '@material-ui/icons/Send';

export const MinimalEmailSubscribeStyle = React.memo(
  function MinimalEmailSubscribe() {

  
    return (
      <div>
        <FormLabel htmlFor={'newsletter'} >
          Newsletter
        </FormLabel>
        <EmailSubscribe
          onSubmit={email => alert(`Your email is ${email}.`)}
          useStyles={useMinimalEmailSubscribeStyles}
          inputClearedAfterSubmit
        >
          <EmailTextInput id={'newsletter'} placeholder="Enter your email" />
          <SubmitButton aria-label="subscribe">
            <Send />
          </SubmitButton>
        </EmailSubscribe>
      </div>
    );
  }
);
import React from 'react';
import {Flex, Link} from 'theme-ui';

const PapercupsBranding = () => {
  return (
    <Flex m={2} sx={{justifyContent: 'center', alignItems: 'center'}}>
      <Link
        href="https://botcart.co?utm_source=papercups&utm_medium=chat&utm_campaign=chat-widget-link"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: 'gray',
          opacity: 0.8,
          transition: '0.2s',
          '&:hover': {opacity: 1},
        }}
      >
        Powered by Botcart
      </Link>
    </Flex>
  );
};

export default PapercupsBranding;

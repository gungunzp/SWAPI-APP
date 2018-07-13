import React from 'react';

export const JsonBlock = ({ json }) => (
  <div className="json">
    <pre className="json__inner">
			{json && !!json.length ? JSON.stringify(json, null, 2) : 'No data'}
		</pre>
  </div>
);

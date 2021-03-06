/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @format
 */

import * as React from 'react';

type Props = {
  children?: mixed,
};

export const ToolbarCenter = (props: Props) => {
  return (
    // $FlowFixMe(>=0.53.0) Flow suppress
    <div className="nuclide-ui-toolbar__center">{props.children}</div>
  );
};

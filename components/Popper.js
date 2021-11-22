import React, { useState } from 'react';

import Tippy from '@tippyjs/react';

export default function Popper({ children, content }) {
  const [opened, setOpened] = useState(false);

  function open() {
    setOpened(true)
  }

  function close() {
    setOpened(false)
  }

  const Component = content

  return (
    <Tippy content={<Component />} interactive visible={opened} onClickOutside={close} delay={0} duration={0}>
      <button onClick={opened ? close : open}>{children}</button>
    </Tippy>
  )
}

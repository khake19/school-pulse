import { css } from '@emotion/react'

const SidebarStyle = {
  sidebar: css`
    pos: sticky;
    height: calc(100vh - 80px);
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffff;
  `,
  avatar: css`
    padding: 5%;
    flex-direction: column;
    width: 100%;
    margin-bottom: 4;
  `
}

export default SidebarStyle

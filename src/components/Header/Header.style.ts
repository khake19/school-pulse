import { css } from '@emotion/react'

const HeaderStyle = {
  header: css`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    gap: 4px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    color: #6b8fbc;
    font-size: 14px;
    position: sticky;
    top: 0;
  `,
  menuButton: css`
    height: 45px;
    width: 300px;
  `
}

export default HeaderStyle

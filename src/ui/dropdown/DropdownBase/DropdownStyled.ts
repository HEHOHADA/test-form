import { GetItemPropsOptions } from 'downshift'
import styled from 'styled-components'
import { ArrowBaseIcon } from 'ui/icons/ArrowBaseIcon'
import { themeColor, themeFontSize } from 'ui/theme'
import { Button } from 'ui/base/form/Button'
import { Item } from './DropdownBase'

export const Container = styled.div`
  position: relative;
  display: flex;
`

export const Title = styled.div`
  display: flex;
  align-items: flex-start;
  flex: auto;
  color: ${themeColor('dark')};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const ToggleArrowIcon = styled(ArrowBaseIcon)`
  display: inline-block;
`

interface MenuItemProps extends Partial<GetItemPropsOptions<Item>> {
  highlighted?: boolean
}

export const MenuItem = styled.li<MenuItemProps>`
  display: flex;
  align-items: center;
  background: ${(props) => themeColor(props.highlighted ? 'greyLight' : 'white')};
  box-sizing: border-box;
  min-height: 44px;
  position: relative;
  line-height: 18px;
  font-size: ${themeFontSize('medium')};
  flex-grow: 1;
  width: 100%;
  padding: 0 14px;
`

export const Menu = styled.ul<{ menuWidth: number }>`
  position: absolute;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: ${themeColor('white')};
  border: 1px solid ${themeColor('grey')};
  box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04), 0 20px 20px rgba(44, 39, 56, 0.04);
  z-index: 4;
  left: 14px;
  top: calc(100% + 5px);
  width: ${({ menuWidth }) =>
    typeof menuWidth === 'string' ? menuWidth : `${menuWidth}px`};
  max-width: ${({ menuWidth }) =>
    typeof menuWidth === 'string' ? menuWidth : `${menuWidth}px`};
`

export const ToggleButton = styled(Button)`
  flex-grow: 1;
  outline: 0;
  width: 100%;
  background-color: ${themeColor('white')};
  font-size: ${themeFontSize('medium')};
  padding: 0 14px;
  margin: 0 14px;
  border: 1px solid ${themeColor('grey')};

  &:focus {
    border: 1px solid ${themeColor('main')};
  }
`
